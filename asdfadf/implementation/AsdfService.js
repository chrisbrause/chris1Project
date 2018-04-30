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

exports.getAsdfByid = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var id = args.id ? args.id.value: null;
    var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var AsdfData = [];
    if(AsdfFD) {
        AsdfData = JSON.parse(AsdfFD);
    }
    var myRecord;
    for(var i=0;i<AsdfData.length;i++) {
        if(AsdfData[i]['id'] == id) {
             myRecord = AsdfData[i];
             break;
        }
    }
    cb(null, myRecord);
}






exports.putAsdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args.id ? args.id.value: null;
   var body = args[bodyParam].value;
   var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var AsdfData = [];
   if(AsdfFD) {
       AsdfData = JSON.parse(AsdfFD);
   }
   var myRecord;
   for(var i=0;i<AsdfData.length;i++) {
       if(AsdfData[i]['id'] == id) {
            AsdfData[i] = Object.assign(AsdfData[i],body);
            myRecord = AsdfData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AsdfData));
   cb(null, myRecord);
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
    cb(null, body);
}


exports.patchAsdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args.id ? args.id.value: null;
   var body = args[bodyParam].value;
   var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var AsdfData = [];
   if(AsdfFD) {
       AsdfData = JSON.parse(AsdfFD);
   }
   var myRecord;
   for(var i=0;i<AsdfData.length;i++) {
       if(AsdfData[i]['id'] == id) {
            AsdfData[i] = Object.assign(AsdfData[i],body);
            myRecord = AsdfData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AsdfData));
   cb(null, myRecord);
}



exports.deleteAsdf = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args.id ? args.id.value: null;
   //var body = args[bodyParam].value;
   var AsdfFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var AsdfData = [];
   if(AsdfFD) {
       AsdfData = JSON.parse(AsdfFD);
   }
   var found = false;
   for(var i=0;i<AsdfData.length;i++) {
       if(AsdfData[i]['id'] == id) {
            AsdfData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(AsdfData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


