const mongoose = require('mongoose')
const relationship = require('mongoose-relationship')

var driverSchema = mongoose.Schema({
    name: String,
    tabnumber: String,
    graphic: {
        date: String,
        items: Array,
        status: String,
        exceptions: Array
    },
    bus: { type: mongoose.Schema.Types.ObjectId, ref: 'bus', childPath:"drivers" },
    ways: Array,
    phone: String,
    image: String
})
driverSchema.plugin(relationship, { relationshipPathName:'bus' })

var busSchema = mongoose.Schema({
    busnumber: String,
    color: String,
    mark: String,
    capacity: String,
    drivers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'driver' }],
    way: { type: mongoose.Schema.Types.ObjectId, ref: 'way', childPath:"buses" },
    status: String
})
busSchema.plugin(relationship, { relationshipPathName:'way' })

var waySchema = mongoose.Schema({
    title: String,
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'route', childPath:"ways" },
    times: {
      durationFirstSmene: String,
      durationSecondSmene: String,
      outPark: String,
      change: String,
      endWork: String,
      lunchFirstSmene: String,
      lunchSecondSmene: String
    },
    isTwoSmene: Boolean,
    isWeekend: Boolean,
    isWeekday: Boolean,
    isSummer: Boolean,
    isWinter: Boolean,
    buses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bus' }]
})
waySchema.plugin(relationship, { relationshipPathName:'route' })

var routeSchema = mongoose.Schema({
    title: String,
    ways: [{ type: mongoose.Schema.Types.ObjectId, ref: 'way' }]
})

module.exports.Driver = mongoose.model('driver', driverSchema);
module.exports.Bus = mongoose.model('bus', busSchema);
module.exports.Route = mongoose.model('route', routeSchema);
module.exports.Way = mongoose.model('way', waySchema);