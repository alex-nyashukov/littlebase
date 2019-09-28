var express = require('express')
const jwt = require('express-jwt')

var auth = require('./auth')
var drivers = require('./drivers')
var buses = require('./buses')
var routes = require('./routes')
var ways = require('./ways')

var api = express.Router()
api.use(
  jwt({
    secret: 'dummy'
  }).unless({
    path: '/api/auth/login'
  })
)

module.exports = function(app) {
  api.use('/auth', auth)
  api.use('/drivers', drivers)
  api.use('/buses', buses)
  api.use('/routes', routes)
  api.use('/ways', ways)
  
  app.use('/api', api)
}