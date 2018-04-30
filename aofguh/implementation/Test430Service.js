'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Test430.json';
var bodyParam = 'test430s/v1'; 
     


exports.getTest430 = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var Test430FD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var Test430Data = [];
    if(Test430FD) {
        Test430Data = JSON.parse(Test430FD);
    }
    cb(null, Test430Data);
}

exports.getTest430Bysecond attribute = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var second attribute = args.second attribute ? args.second attribute.value: null;
    var Test430FD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var Test430Data = [];
    if(Test430FD) {
        Test430Data = JSON.parse(Test430FD);
    }
    var myRecord;
    for(var i=0;i<Test430Data.length;i++) {
        if(Test430Data[i]['second attribute'] == second attribute) {
             myRecord = Test430Data[i];
             break;
        }
    }
    cb(null, myRecord);
}






exports.putTest430 = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var second attribute = args.second attribute ? args.second attribute.value: null;
   var body = args[bodyParam].value;
   var Test430FD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var Test430Data = [];
   if(Test430FD) {
       Test430Data = JSON.parse(Test430FD);
   }
   var myRecord;
   for(var i=0;i<Test430Data.length;i++) {
       if(Test430Data[i]['second attribute'] == second attribute) {
            Test430Data[i] = Object.assign(Test430Data[i],body);
            myRecord = Test430Data[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(Test430Data));
   cb(null, myRecord);
}


exports.postTest430 = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var Test430FD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var Test430Data = [];
    if(Test430FD) {
        Test430Data = JSON.parse(Test430FD);
    }
    Test430Data.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(Test430Data));
    cb(null, body);
}


exports.patchTest430 = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var second attribute = args.second attribute ? args.second attribute.value: null;
   var body = args[bodyParam].value;
   var Test430FD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var Test430Data = [];
   if(Test430FD) {
       Test430Data = JSON.parse(Test430FD);
   }
   var myRecord;
   for(var i=0;i<Test430Data.length;i++) {
       if(Test430Data[i]['second attribute'] == second attribute) {
            Test430Data[i] = Object.assign(Test430Data[i],body);
            myRecord = Test430Data[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(Test430Data));
   cb(null, myRecord);
}



exports.deleteTest430 = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var second attribute = args.second attribute ? args.second attribute.value: null;
   //var body = args[bodyParam].value;
   var Test430FD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var Test430Data = [];
   if(Test430FD) {
       Test430Data = JSON.parse(Test430FD);
   }
   var found = false;
   for(var i=0;i<Test430Data.length;i++) {
       if(Test430Data[i]['second attribute'] == second attribute) {
            Test430Data.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(Test430Data));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


