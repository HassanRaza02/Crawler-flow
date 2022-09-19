var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const mongoose = require("mongoose");

// Connect to the db
mongoose.connect("mongodb://localhost:27017/flowCrawler", function (err, db) {
   
     if(err) throw err;

    console.log("MongoDB Connected!")
                
});

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/events', indexRouter);
app.use('/templates', indexRouter);


// catch 404
app.use('/',function(req, res, next) {
  
  res.json(
    {
      status: 404,
      error: true
    });
});


module.exports = app;
