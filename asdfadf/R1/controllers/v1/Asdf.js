'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var AsdfImplementation = require('../../../implementation/AsdfService.js');
    
var AsdfData;

        


    module.exports.getAsdf = function getAsdf (req, res, next) {
    var args = req.swagger.params;
    AsdfImplementation.getAsdf(args, (error, data) => {
        AsdfData = data;
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
    });
};

module.exports.getAsdfByid = function getAsdf (req, res, next) {
    var args = req.swagger.params;
    AsdfImplementation.getAsdfByid(args, (error, data) => {
        AsdfData = data;
        if (AsdfData && Object.keys(AsdfData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(AsdfData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putAsdf = function putAsdf (req, res, next) {
    var args = req.swagger.params;
    AsdfImplementation.putAsdf(args, (error, data) => {
        AsdfData = data;
        if (AsdfData && Object.keys(AsdfData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(AsdfData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postAsdf = function postAsdf (req, res, next) {
    var args = req.swagger.params;
    AsdfImplementation.postAsdf(args, (error, data) => {
        AsdfData = data;
        if (AsdfData && Object.keys(AsdfData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(AsdfData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchAsdf = function patchAsdf (req, res, next) {
    var args = req.swagger.params;
    AsdfImplementation.patchAsdf(args, (error, data) => {
        AsdfData = data;
        if (AsdfData && Object.keys(AsdfData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(AsdfData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteAsdf = function deleteAsdf (req, res, next) {
    var args = req.swagger.params;
    AsdfImplementation.deleteAsdf(args, (error, data) => {
        AsdfData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
