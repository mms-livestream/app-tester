/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

let express = require('express');
let request = require('request');
let fs = require('fs');
let http = require('http');

let core = require('mms-core');

let app = express();
let server = app.listen(2500, "0.0.0.0");	//entry port

let webcamAddr = ["192.168.2.118","192.168.2.118"];
let webcamPort = 8080;
let contentId =['1', '2'];
let destTranscoder=[`http://${core.dConfig["NODE_TRANSCODER1"].server.host}:${core.dConfig["NODE_TRANSCODER1"].server.port}/api/video`, `http://${core.dConfig["NODE_TRANSCODER2"].server.host}:${core.dConfig["NODE_TRANSCODER2"].server.port}/api/video`, `http://${core.dConfig["NODE_TRANSCODER3"].server.host}:${core.dConfig["NODE_TRANSCODER2"].server.port}/api/video`];
let destTranscoderAlarm= {};
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

for(let i = 0; i < contentId.length; i++){
        destTranscoderAlarm[i] = `http://${core.dConfig["NODE_TRANSCODER"].server.host}:8088/api/video/` + contentId[i];
     }


for(let i = 0; i < contentId.length; i++){
        console.log(contentId[0]);
     }


function function1() {
     for(let i = 0; i < contentId.length; i++){
        request.post(destTranscoderAlarm[i]);
     }
}

function function2() {
    // all the stuff you want to happen after that pause
    for(let i = 0; i < contentId.length; i++){
    var req = request(`http://${webcamAddr[i]}:${webcamPort}/video`).pipe(request.post(destTranscoder[i]));
    }
}

// call the first chunk of code right away
function1();

// call the rest of the code and have it execute after 1 seconds
setTimeout(function2, 1000);




