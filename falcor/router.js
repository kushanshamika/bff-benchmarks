'use strict';

var Router = require('falcor-router');
var Promise = require('promise');

var jsonGraph = require('falcor-json-graph');
var $ref = jsonGraph.ref;
var $error = jsonGraph.error;

var userService =  require('./userService');

var NetflixRouterBase = Router.createClass([
    {
        route: "userProfile.profile.todos[{integers:userId}].posts",
        get: function (pathSet) {
            return userService.getUserProfile(pathSet.userId[0]);
        }
    }
]);


var NetflixRouter = function(userId) {
    NetflixRouterBase.call(this);
    this.userId = userId;
};
NetflixRouter.prototype = Object.create(NetflixRouterBase.prototype);

module.exports = function(userId) {
    return new NetflixRouter(userId);    
};
