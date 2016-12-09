var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var path = require('path');

var port = process.env.PORT || 4002;

//to enable cookies
app.use(cookieParser());
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var apiRouter = require('./src/routes/apiRoute');
app.use('/api', apiRouter)

var indexRouter = require('./src/routes/indexRoute');
app.use('/', indexRouter);

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'builds')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.set('views', 'src/views');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE');
    next();
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});