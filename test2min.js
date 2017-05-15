/*jslint node: true */
/*jshint esversion: 6 */
"use strict";

let express = require("express");
let request = require("request");
let fs = require("fs");
let app = express();
let core = require("mms-core");

let destTranscoderAlarm = {};

var server = app.listen(app.get(1000), function() {

      function function1(){
      request.post(`http://${core.dConfig["NODE_TRANSCODER"].server.host}:8088/api/video/1` );
      }
    
      function function2() {
      request.get(`http://192.168.0.25:8080/video`)
      .pipe(request.post(`http://${core.dConfig["NODE_TRANSCODER1"].server.host}:${core.dConfig["NODE_TRANSCODER1"].server.port}/api/video`))
      }

      function1();
      setTimeout(function2, 1000);

      
      
});
server.timeout = 100000000;