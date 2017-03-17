/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

let express = require('express');
let request = require('request');
let fs = require('fs');

let app = express();
let server = app.listen(2500, "0.0.0.0");	//entry port

let protocol = "http";
let targetAddr = "192.168.1.121";
//let targetAddr = "192.168.0.25";
let targetPort = 8080;

app.get('/', (req, res) => {
<<<<<<< HEAD
  //stream in browser
  request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(res);

  //write file
  //request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(fs.createWriteStream('test.mpg'));  //todo: test if without end:true ok
  //format is .mpg, convert it to mp4 : ffmpeg -i test.mpg video.mp4
=======

  //--Metadata to manager

  //Data JSON : hardcoded
  var data = querystring.stringify({
      'title' : 'ADVANCED_OPTIMIZATIONS',
      'author' : 'hello',
      'tags': 'json'
  });

  //Options
  var post_options = {
      host: 'localhost',
      port: '2502',
      path: '/metadata',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(post_data)
      }
  };

  //Do request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  //--Video to transcoder

  //Options : transcoder
  let destTranscoder = "http://localhost:2501";

  //Do request
  request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(request.post(destTranscoder));
>>>>>>> 9b0006fe5b9f34e53bc98b4bd6fb820833caaf34

});




// test for convert in mp4
/*


//stream in browser
request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(res);

//write file
//request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(fs.createWriteStream('test.mpg'));  //todo: test if without end:true ok
//format is .mpg, convert it to mp4 : ffmpeg -i test.mpg video.mp4

//res.send(200);

//test with read file stream
app.get('/sample', (req, res) => {
  fs.createReadStream('sample_upload.mp4').pipe(res);
});

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
