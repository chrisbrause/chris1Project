'use strict';
  var NewtestmayfourFD = require('../../sampleData/v1/Newtestmayfour.json');
  var NewtestmayfourData = NewtestmayfourFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getNewtestmayfour = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(NewtestmayfourData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, NewtestmayfourData).then(function(result) {
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





exports.putNewtestmayfour = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(NewtestmayfourData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(NewtestmayfourData[Object.keys(NewtestmayfourData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postNewtestmayfour = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(NewtestmayfourData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(NewtestmayfourData[Object.keys(NewtestmayfourData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchNewtestmayfour = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(NewtestmayfourData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(NewtestmayfourData[Object.keys(NewtestmayfourData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteNewtestmayfour = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(NewtestmayfourData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(NewtestmayfourData[Object.keys(NewtestmayfourData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


