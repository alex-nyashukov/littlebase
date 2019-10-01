const Outfit = require('../models').Outfit
const Driver = require('../models').Driver
const Bus = require('../models').Bus

var express = require('express')
var router = express.Router()

router.get('/:date', async (req, res) => {
  var allItems = await Outfit.find().exec()
  var items = await Outfit.find({ date: req.params.date }).exec()
  var drivers = await Driver.find().exec()
  var buses = await Bus.find().exec()
  var statistic = {}

  allItems.forEach(item => {
    buses.forEach(bus => {
      let busId = ''+bus._id
      if(bus.way == item.wayId) {
        if(!statistic[busId]) {
          statistic[busId] = {}
        }
        if(!statistic[busId][item.wayId]) {
          statistic[busId][item.wayId] = { count: 0, isKnow: true }
        } else {
          statistic[busId][item.wayId].isKnow = true
        }
      }
      if(item['bus'] == busId) {
        increment(statistic, busId, item.wayId)
      }
    })
    drivers.forEach(driver => {
      let driverId = ''+driver._id
      if(driver.ways.includes(item.wayId)) {
        if(!statistic[driverId]) {
          statistic[driverId] = {}
        }
        if(!statistic[driverId][item.wayId]) {
          statistic[driverId][item.wayId] = { count: 0, isKnow: true }
        } else {
          statistic[busId][item.wayId].isKnow = true
        }
      }
      switch(driverId) {
        case item['firstSmene']:
          increment(statistic, driverId, item.wayId)
          break
        case item['secondSmene']:
          increment(statistic, driverId, item.wayId)
          break
        case item['allDay']:
          increment(statistic, driverId, item.wayId)
          break
      }

    })
  })

  res.send({items, statistic})

  function increment(statistic, _id, wayId) {
    if(!statistic[_id]) {
      statistic[_id] = {}
    }
    if(!statistic[_id][wayId]) {
      statistic[_id][wayId] = { count: 0, isKnow: false }
    }
    statistic[_id][wayId].count++
  }
})

router.post('/:date', async (req, res) => {
  var result = await Outfit.deleteMany({ date: req.params.date }).exec()
  result = await Outfit.insertMany(req.body)
  res.send(result)
})

module.exports = router