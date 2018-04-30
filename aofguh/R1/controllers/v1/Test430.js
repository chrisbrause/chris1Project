'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var Test430Implementation = require('../../../implementation/Test430Service.js');
    
var Test430Data;

        


    module.exports.getTest430 = function getTest430 (req, res, next) {
    var args = req.swagger.params;
    Test430Implementation.getTest430(args, (error, data) => {
        Test430Data = data;
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
    });
};

module.exports.getTest430Bysecond attribute = function getTest430 (req, res, next) {
    var args = req.swagger.params;
    Test430Implementation.getTest430Bysecond attribute(args, (error, data) => {
        Test430Data = data;
        if (Test430Data && Object.keys(Test430Data).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(Test430Data));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putTest430 = function putTest430 (req, res, next) {
    var args = req.swagger.params;
    Test430Implementation.putTest430(args, (error, data) => {
        Test430Data = data;
        if (Test430Data && Object.keys(Test430Data).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(Test430Data || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postTest430 = function postTest430 (req, res, next) {
    var args = req.swagger.params;
    Test430Implementation.postTest430(args, (error, data) => {
        Test430Data = data;
        if (Test430Data && Object.keys(Test430Data).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(Test430Data || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchTest430 = function patchTest430 (req, res, next) {
    var args = req.swagger.params;
    Test430Implementation.patchTest430(args, (error, data) => {
        Test430Data = data;
        if (Test430Data && Object.keys(Test430Data).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(Test430Data || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteTest430 = function deleteTest430 (req, res, next) {
    var args = req.swagger.params;
    Test430Implementation.deleteTest430(args, (error, data) => {
        Test430Data = data;
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
    


    
                
        
    
