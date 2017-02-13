"use strict"

let express = require('express');
let request = require('request');
let fs = require('fs');

let Transcoder = require('stream-transcoder');

let app = express();
let server = app.listen(2500, "0.0.0.0");


let protocol = "http"
let targetAddr = "192.168.0.25";
let targetPort = 8080;

//test with read file stream
app.get('/sample', (req, res) => {
  fs.createReadStream('sample_upload.mp4').pipe(res);
});

//main test
app.get('/', (req, res) => {
  //stream in browser
  //request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(res);

  //write file
  request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(fs.createWriteStream('test.mpg'));  //todo: test if without end:true ok
  //format is .mpg, convert it to mp4 : ffmpeg -i test.mpg video.mp4

  //res.send(200);
});




/* Utiliser peut-être un truc dans le genre pour passer en mp4

var input_file = fs.createReadStream('sample_upload.mp4');
input_file.on('error', function(err) {
    console.log(err);
});

var output_path = 'tmp/output.mp4';
var output_stream = fs.createWriteStream('tmp/output.mp4');

var ffmpeg = child_process.spawn('ffmpeg', ['-i', 'pipe:0', '-f', 'mp4', '-movflags', 'frag_keyframe', 'pipe:1']);
input_file.pipe(ffmpeg.stdin);
ffmpeg.stdout.pipe(output_stream);

ffmpeg.stderr.on('data', function (data) {
    console.log(data.toString());
});

ffmpeg.stderr.on('end', function () {
    console.log('file has been converted succesfully');
});

ffmpeg.stderr.on('exit', function () {
    console.log('child process exited');
});

ffmpeg.stderr.on('close', function() {
    console.log('...closing time! bye');
});

*/




/* Others

new Transcoder(request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(res))
    .maxSize(320, 240)
    .videoCodec('h264')
    .videoBitrate(800 * 1000)
    .fps(25)
    .audioCodec('libfaac')
    .sampleRate(44100)
    .channels(2)
    .audioBitrate(128 * 1000)
    .format('mp4')
    .stream().pipe(fs.createWriteStream('test'));*/
