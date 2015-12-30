/* eslint no-unused-expressions:0 */
/* globals afterEach, beforeEach, describe, it */

'use strict';

var chai = require('chai');
var expect = chai.expect;

//var http = require('http');
var fetch = require('../lib/fetch');
var http = require('http');
var https = require('https');

chai.config.includeStack = true;

var HTTP_PORT = 9998;
var HTTPS_PORT = 9993;

describe('fetch tests', function () {
    var httpServer, httpsServer;

    beforeEach(function (done) {

    });

    afterEach(function (done) {
        httpServer.close(function () {
            httpsServer.close(done);
        })
    });

});
