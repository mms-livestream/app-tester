"use strict"

let express = require('express');
let request = require('request');
let fs = require('fs');

let Transcoder = require('stream-transcoder');

let app = express();
let server = app.listen(2500, "0.0.0.0");


let protocol = "http"
let targetAddr = "192.168.100.35";
let targetPort = 8080;

//test with read file stream
app.get('/sample', (req, res) => {
  fs.createReadStream('sample_upload.mp4').pipe(res);
});

//main test
app.get('/', (req, res) => {
  //stream in browser
  //request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(fs.createWriteStream(res));

  //write file
  request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(fs.createWriteStream('test.mpg'));  //todo: test if without end:true ok
  //format is .mpg, convert it to mp4 : ffmpeg -i test.mpg video.mp4

  //res.send(200);
});




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
