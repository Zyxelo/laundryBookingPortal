var express = require('express');
const flatpickr = require("flatpickr");
var router = express.Router();
var DateModel = require('../models/date');

/* GET home page. */
router.get('/', function(req, res, next) {
  var today = new Date();
  console.log(today, 'date');
  var searchString = today.getFullYear() + "-" + ("0" + (today.getMonth() + 1)).slice(-2) + "-" + today.getDate();
  DateModel.findOrCreate({day: searchString}, function(err, response, created){
    console.log(created);
    res.render('index', { title: 'Bokningsportal', data: response});
  });



});

module.exports = router;
