var express = require('express');
var indexRouter = express.Router();
var path = require('path');

indexRouter.route('/')
    .get(function (req, res) {
        // res.render('index');
        res.sendFile(path.join(__dirname,'./../../index.html')); // for testing - do not consider it as an actual
    });

module.exports = indexRouter;