'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var NewtestmayfourImplementation = require('../../../implementation/NewtestmayfourService.js');
    
var NewtestmayfourData;

        


    module.exports.getNewtestmayfour = function getNewtestmayfour (req, res, next) {
    var args = req.swagger.params;
    NewtestmayfourImplementation.getNewtestmayfour(args, (error, data) => {
        NewtestmayfourData = data;
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
    });
};

module.exports.getNewtestmayfourBytestmayfouragain = function getNewtestmayfour (req, res, next) {
    var args = req.swagger.params;
    NewtestmayfourImplementation.getNewtestmayfourBytestmayfouragain(args, (error, data) => {
        NewtestmayfourData = data;
        if (NewtestmayfourData && Object.keys(NewtestmayfourData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(NewtestmayfourData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putNewtestmayfour = function putNewtestmayfour (req, res, next) {
    var args = req.swagger.params;
    NewtestmayfourImplementation.putNewtestmayfour(args, (error, data) => {
        NewtestmayfourData = data;
        if (NewtestmayfourData && Object.keys(NewtestmayfourData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(NewtestmayfourData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postNewtestmayfour = function postNewtestmayfour (req, res, next) {
    var args = req.swagger.params;
    NewtestmayfourImplementation.postNewtestmayfour(args, (error, data) => {
        NewtestmayfourData = data;
        if (NewtestmayfourData && Object.keys(NewtestmayfourData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(NewtestmayfourData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchNewtestmayfour = function patchNewtestmayfour (req, res, next) {
    var args = req.swagger.params;
    NewtestmayfourImplementation.patchNewtestmayfour(args, (error, data) => {
        NewtestmayfourData = data;
        if (NewtestmayfourData && Object.keys(NewtestmayfourData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(NewtestmayfourData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteNewtestmayfour = function deleteNewtestmayfour (req, res, next) {
    var args = req.swagger.params;
    NewtestmayfourImplementation.deleteNewtestmayfour(args, (error, data) => {
        NewtestmayfourData = data;
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
    


    
                
        
    
