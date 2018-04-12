'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var AdfImplementation = require('../../../implementation/AdfService.js');
    
var AdfData;

        


        module.exports.getAdf = function getAdf (req, res, next) {
        var args = req.swagger.params;
        AdfImplementation.getAdf(args, (error, data) => {
            AdfData = data;
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
        });
    };
    
                
        


    
                module.exports.putAdf = function putAdf (req, res, next) {
        var args = req.swagger.params;
        AdfImplementation.patchAdf(args, (error, data) => {
            AdfData = data;
            if (Object.keys(AdfData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(AdfData || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
        
        


    
            module.exports.postAdf = function postAdf (req, res, next) {
        var args = req.swagger.params;
        AdfImplementation.postAdf(args, (error, data) => {
            AdfData = data;
            if (Object.keys(AdfData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(AdfData || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
            
        


    
        module.exports.patchAdf = function patchAdf (req, res, next) {
        var args = req.swagger.params;
        AdfImplementation.patchAdf(args, (error, data) => {
            AdfData = data;
            if (Object.keys(AdfData).length > 0) {
                                res.setHeader('Content-Type', 'application/json');
                                                  res.end(JSON.stringify(AdfData || {}, null, 2));
            } else {
                res.end();
            }
        });
    };
                
            module.exports.deleteAdf = function deleteAdf (req, res, next) {
        var args = req.swagger.params;
        AdfImplementation.deleteAdf(args, (error, data) => {
            AdfData = data;
            if (Object.keys(AdfData).length > 0) {
                res.setHeader('Content-Type', 'application/json');
                              res.end(JSON.stringify(AdfData || {}, null, 2));
            } else {
                res.end();
            }

        });
    };
    


    
                
        
    
