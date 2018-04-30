'use strict';
  var AsdfFD = require('../../sampleData/v1/Asdf.json');
  var AsdfData = AsdfFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getAsdf = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(AsdfData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, AsdfData).then(function(result) {
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





exports.putAsdf = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AsdfData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AsdfData[Object.keys(AsdfData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postAsdf = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AsdfData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AsdfData[Object.keys(AsdfData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchAsdf = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AsdfData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AsdfData[Object.keys(AsdfData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteAsdf = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(AsdfData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(AsdfData[Object.keys(AsdfData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


