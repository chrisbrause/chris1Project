'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Asdf.json';
var bodyParam = 'asdfs/v1'; 
     


exports.getAsdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var AsdfData = [];
    if(AsdfFD) {
        AsdfData = JSON.parse(AsdfFD);
    }
    cb(null, AsdfData);
}





exports.putAsdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var body = args[bodyParam].value;
   var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var AsdfData = [];
   if(AsdfFD) {
       AsdfData = JSON.parse(AsdfFD);
   }
   AsdfData.push(body);

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AsdfData));
   cb(null, "One record has been updated: "+body[Object.keys(body)[0]]);
}


exports.postAsdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var AsdfData = [];
    if(AsdfFD) {
        AsdfData = JSON.parse(AsdfFD);
    }
    AsdfData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AsdfData));
    cb(null, "One record has been added: "+body[Object.keys(body)[0]]);
}


exports.patchAsdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var body = args[bodyParam].value;
   var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var AsdfData = [];
   if(AsdfFD) {
       AsdfData = JSON.parse(AsdfFD);
   }
   AsdfData.push(body);

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AsdfData));
   cb(null, "One record has been updated: "+body[Object.keys(body)[0]]);
}



exports.deleteAsdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var body = args[bodyParam].value;
   var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var AsdfData = [];
   if(AsdfFD) {
       AsdfData = JSON.parse(AsdfFD);
   }
   var found = false;
   for(var i=0;i<AsdfData.length;i++) {
       if(JSON.stringify(body)==JSON.stringify(AsdfData[i])) {
            AsdfData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AsdfData));
   if(found) {
    cb(null, "One record has been deleted");
   }
   else {
    cb(null, "No record has been deleted");
   }
}


