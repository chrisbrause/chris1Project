'use strict';
  var AdfFD = require('../../sampleData/v1/Adf.json');
  var AdfData = AdfFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getAdf = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(AdfData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, AdfData).then(function(result) {
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





exports.putAdf = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AdfData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AdfData[Object.keys(AdfData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postAdf = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AdfData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AdfData[Object.keys(AdfData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchAdf = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(AdfData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(AdfData[Object.keys(AdfData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteAdf = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(AdfData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(AdfData[Object.keys(AdfData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


