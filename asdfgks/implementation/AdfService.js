'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Adf.json';
var bodyParam = 'adfs/v1'; 
     




exports.putAdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var body = args[bodyParam].value;
   var AdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var AdfData = [];
   if(AdfFD) {
       AdfData = JSON.parse(AdfFD);
   }
   AdfData.push(body);

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AdfData));
   cb(null, "One record has been updated: "+body[Object.keys(body)[0]]);
}
