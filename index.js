/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

let express = require('express');
let request = require('request');
let fs = require('fs');

let core = require('mms-core');

let app = express();
let server = app.listen(2500, "0.0.0.0");	//entry port

let webcamAddr = "192.168.2.118";
let webcamPort = 8080;
let contentId =['1','2'];

//Metadata to Manager

//Options
let destHost = core.dConfig["NODE_METADATA_MANAGER"].server.host;  //jshint ignore:line
let destPort = core.dConfig["NODE_METADATA_MANAGER"].server.port;  //jshint ignore:line
// let data = {"data": {"id_uploader":1, "title":"TestVideo", "tags":["test", "enseirb"]}};
// let options = {
//   url: `http://${destHost}:${destPort}/api/metadata`,
//   method: 'POST',
//   json: true,
//   headers: {
//       'Content-Type': 'application/json'
//   },
//   body: data
// };

//Do request
/*
request(options, function(err, res) {
    if (!err && res.statusCode === 200) {
        console.log("OK sent");
    }
    else {
        console.log("Error:" + err);
    }

//Video to Transcoder

//Options
let destTranscoder = `http://${core.dConfig["NODE_TRANSCODER"].server.host}:${core.dConfig["NODE_TRANSCODER"].server.port}/api/video`;     //jshint ignore:line

//Do request
request(`http://${webcamAddr}:${webcamPort}/video`).pipe(request.post(destTranscoder));


});*/

//Options
let destTranscoder = `http://${core.dConfig["NODE_TRANSCODER"].server.host}:${core.dConfig["NODE_TRANSCODER"].server.port}/api/video`;     //jshint ignore:line
let destTranscoderAlarm1 = `http://${core.dConfig["NODE_TRANSCODER"].server.host}:8088/api/video/` + contentId[0];
let destTranscoderAlarm2 = `http://${core.dConfig["NODE_TRANSCODER"].server.host}:8088/api/video/` + contentId[1];

//Do request

console.log(contentId[0], contentId[1]);

function function1() {
    request.post(destTranscoderAlarm1);
    request.post(destTranscoderAlarm2);
}

function function2() {
    // all the stuff you want to happen after that pause
    request(`http://${webcamAddr}:${webcamPort}/video`).pipe(request.post(destTranscoder));
    request(`http://${webcamAddr}:${webcamPort}/video`).pipe(request.post(destTranscoder));
}

// call the first chunk of code right away
function1();

// call the rest of the code and have it execute after 3 seconds
setTimeout(function2, 1000);




