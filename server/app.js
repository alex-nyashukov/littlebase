const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const app = express()
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/base', function (err) {
   if (err) throw err;
   console.log('Successfully connected');
 
});

app.use(cookieParser())
app.use(bodyParser.json())

require('./routes')(app)

module.exports = app