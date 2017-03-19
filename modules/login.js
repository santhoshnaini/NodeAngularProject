var express = require('express');
var loginModule_DAL = require('../dal/dal_login');

var routeLogin = express.Router();
//uri:/api/login
routeLogin.get('/', function (req, res) {
    var request = {
        userName: req.query.userName,
        userPassword: req.query.userPassword
    };   
    loginModule_DAL.getUserData(request).then(function (success) {
        res.send(success);
    }, function (error) {

    });


});

module.exports = routeLogin;