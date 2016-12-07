var express = require('express');
var cookieParser = require('cookie-parser');
var apiRouter = express.Router();
var bodyparser = require('body-parser');
var data = require('../../data/profile.json');

apiRouter.route('/')
    .get(function (req, res) {
        res.send("Yup i am there working with BS!!")
    });

apiRouter.route('/auth/login')
    .post(function (req, res) {
        var username = req.body.username;
        var password = req.body.password;

        var uipi = {
            username: username,
            password: password
        };
        res.send({
            success: true,
            token: uipi
        });
    });

apiRouter.route('/profilelist')
    .get(function (req, res) {
        res.send(data);
    });

module.exports = apiRouter;