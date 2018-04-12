'use strict';
  var AdfFD = require('../../sampleData/v1/Adf.json');
  var AdfData = AdfFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 



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
