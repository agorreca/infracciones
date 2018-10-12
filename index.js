var express = require('express');
var requestify = require('requestify'); 
var cheerio = require('cheerio');
var q = require('q');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://root:root@localhost:3306/infracciones');

app.get('/', function (req, res) {

  res.send('Hello World')


});

app.listen(8081, function () {
  console.log('Example app listening on port 3000!.');
});

exports = module.exports = app;
