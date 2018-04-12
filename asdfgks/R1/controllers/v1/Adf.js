'use strict';

  
      var paginationService = require('../apistrategies/pagination.js');
       var AdfImplementation = require('../../../implementation/AdfService.js');
    
var AdfData;

        


    
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
        
        
    
