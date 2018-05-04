'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Newtestmayfour.json';
var bodyParam = 'newtestmayfours/v1'; 
     


exports.getNewtestmayfour = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var NewtestmayfourFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var NewtestmayfourData = [];
    if(NewtestmayfourFD) {
        NewtestmayfourData = JSON.parse(NewtestmayfourFD);
    }
    cb(null, NewtestmayfourData);
}

exports.getNewtestmayfourBytestmayfouragain = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var testmayfouragain = args.testmayfouragain ? args.testmayfouragain.value: null;
    var NewtestmayfourFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var NewtestmayfourData = [];
    if(NewtestmayfourFD) {
        NewtestmayfourData = JSON.parse(NewtestmayfourFD);
    }
    var myRecord;
    for(var i=0;i<NewtestmayfourData.length;i++) {
        if(NewtestmayfourData[i]['testmayfouragain'] == testmayfouragain) {
             myRecord = NewtestmayfourData[i];
             break;
        }
    }
    cb(null, myRecord);
}






exports.putNewtestmayfour = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var testmayfouragain = args.testmayfouragain ? args.testmayfouragain.value: null;
   var body = args[bodyParam].value;
   var NewtestmayfourFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var NewtestmayfourData = [];
   if(NewtestmayfourFD) {
       NewtestmayfourData = JSON.parse(NewtestmayfourFD);
   }
   var myRecord;
   for(var i=0;i<NewtestmayfourData.length;i++) {
       if(NewtestmayfourData[i]['testmayfouragain'] == testmayfouragain) {
            NewtestmayfourData[i] = Object.assign(NewtestmayfourData[i],body);
            myRecord = NewtestmayfourData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(NewtestmayfourData));
   cb(null, myRecord);
}


exports.postNewtestmayfour = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var NewtestmayfourFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var NewtestmayfourData = [];
    if(NewtestmayfourFD) {
        NewtestmayfourData = JSON.parse(NewtestmayfourFD);
    }
    NewtestmayfourData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(NewtestmayfourData));
    cb(null, body);
}


exports.patchNewtestmayfour = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var testmayfouragain = args.testmayfouragain ? args.testmayfouragain.value: null;
   var body = args[bodyParam].value;
   var NewtestmayfourFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var NewtestmayfourData = [];
   if(NewtestmayfourFD) {
       NewtestmayfourData = JSON.parse(NewtestmayfourFD);
   }
   var myRecord;
   for(var i=0;i<NewtestmayfourData.length;i++) {
       if(NewtestmayfourData[i]['testmayfouragain'] == testmayfouragain) {
            NewtestmayfourData[i] = Object.assign(NewtestmayfourData[i],body);
            myRecord = NewtestmayfourData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(NewtestmayfourData));
   cb(null, myRecord);
}



exports.deleteNewtestmayfour = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var testmayfouragain = args.testmayfouragain ? args.testmayfouragain.value: null;
   //var body = args[bodyParam].value;
   var NewtestmayfourFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var NewtestmayfourData = [];
   if(NewtestmayfourFD) {
       NewtestmayfourData = JSON.parse(NewtestmayfourFD);
   }
   var found = false;
   for(var i=0;i<NewtestmayfourData.length;i++) {
       if(NewtestmayfourData[i]['testmayfouragain'] == testmayfouragain) {
            NewtestmayfourData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(NewtestmayfourData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


