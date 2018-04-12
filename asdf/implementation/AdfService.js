'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Adf.json';
var bodyParam = 'adfs/v1'; 
     


exports.getAdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var AdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var AdfData = [];
    if(AdfFD) {
        AdfData = JSON.parse(AdfFD);
    }
    cb(null, AdfData);
}





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


exports.postAdf = function(args, cb) {
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
    cb(null, "One record has been added: "+body[Object.keys(body)[0]]);
}


exports.patchAdf = function(args, cb) {
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



exports.deleteAdf = function(args, cb) {
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
   var found = false;
   for(var i=0;i<AdfData.length;i++) {
       if(JSON.stringify(body)==JSON.stringify(AdfData[i])) {
            AdfData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AdfData));
   if(found) {
    cb(null, "One record has been deleted");
   }
   else {
    cb(null, "No record has been deleted");
   }
}


