const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

var fs = require('fs');

const app = express()
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/base', {useNewUrlParser: true, useUnifiedTopology: true}, function (err) {
   if (err) throw err;
   console.log('Successfully connected');
   fs.readFile('server/db_buses.txt', 'utf8', function(err, contents) {
      console.log(contents.split('\n').length);
   });
});

app.use(cookieParser())
app.use(bodyParser.json())

require('./routes')(app)

module.exports = app