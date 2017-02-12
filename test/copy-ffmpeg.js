"use strict"

let express = require('express');
let request = require('request');
let fs = require('fs');

let ffmpeg = require('./mod');

let app = express();
let server = app.listen(2500, "0.0.0.0");


let protocol = "http"
let targetAddr = "192.168.100.35";
let targetPort = 8080;

app.get('/sample', (req, res) => {
  fs.createReadStream('sample_upload.mp4').pipe(fs.createWriteStream('test'));
});

app.get('/', (req, res) => {
  //request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(fs.createWriteStream('test'));

  var proc = ffmpeg(request(`${protocol}://${targetAddr}:${targetPort}/video`).pipe(res))
    // use the 'flashvideo' preset (located in /lib/presets/flashvideo.js)
    .preset('flashvideo')
    // setup event handlers
    .on('end', function() {
      console.log('file has been converted succesfully');
    })
    .on('error', function(err) {
      console.log('an error happened: ' + err.message);
    })
    // save to stream
    .pipe(fs.createWriteStream('test'), {end:true});

  //res.send(200);
});
