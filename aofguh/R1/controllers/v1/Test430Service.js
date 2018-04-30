'use strict';
  var Test430FD = require('../../sampleData/v1/Test430.json');
  var Test430Data = Test430FD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getTest430 = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(Test430Data).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, Test430Data).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putTest430 = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(Test430Data).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(Test430Data[Object.keys(Test430Data)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postTest430 = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(Test430Data).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(Test430Data[Object.keys(Test430Data)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchTest430 = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(Test430Data).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(Test430Data[Object.keys(Test430Data)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteTest430 = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(Test430Data).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(Test430Data[Object.keys(Test430Data)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


