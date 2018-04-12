'use strict';

var https = require('https');
var url = require('url');
var config = require('../../../configuration/config');
var issuer = config.oAuthUrl;
var basicUser = config.username;
var basicPassword = config.password;

//Here we setup the security checks for the endpoints
//that need it (in our case, only /protected). This
//function will be called every time a request to a protected
//endpoint is received
exports.verifyToken = function(req, authOrSecDef, token, callback) {

    function sendError() {
        return { status: 500, message: JSON.stringify('Error: Access Denied') };
    }

    function handleOAuthResponse(res) {
        res.setEncoding('utf8');
        var responseBody = '';
        res.on('data', function(chunk) {
            responseBody += chunk;
        });
        res.on('end', function() {
            if (res.statusCode != 200) {
                return callback(sendError());
            }
            try {
                var resp = JSON.parse(responseBody);
                return callback(null);
            } catch (error) {
                return callback(sendError());
            }
        });
    }

    //validate the 'Authorization' header. it should have the following format:
    //'Bearer tokenString'
    if (token && token.indexOf("Bearer ") === 0) {
        var options = {
            'hostname': url.parse(issuer).hostname,
            'port': url.parse(issuer).port,
            'path': url.parse(issuer).pathname,
            'method': 'GET',
            'rejectUnauthorized': false,
            'headers': {
                'Authorization': token
            }
        };
        var req = https.request(options, handleOAuthResponse);
        req.on('error', function(e) {
            console.log('Error occurred while trying to retrieve the resource using the following properties:');
            console.log(options);
        });
        req.end();
    } else {
        //return the error in the callback if the Authorization header doesn't have the correct format
        return callback(sendError());
    }
};

exports.verifyBasic = function(req, authOrSecDef, token, callback) {

    function sendError() {
        return { status: 500, message: JSON.stringify('Error: Access Denied') };
    }

    //validate the 'Authorization' header. it should have the following format:
    //'Basic base64(username:password)'
    if (token && token.indexOf("Basic ") === 0) {
        try {
            let creds = token.substring(6);

            var userPass = new Buffer(creds, 'base64').toString('ascii');
            var authCreds = userPass.split(":");
            if (basicUser == authCreds[0] && basicPassword == authCreds[1]) {
                return callback(null);
            } else {
                return callback(sendError());
            }
        } catch (error) {
            return callback(sendError());
        }
    } else {
        //return the error in the callback if the Authorization header doesn't have the correct format
        return callback(sendError());
    }
};