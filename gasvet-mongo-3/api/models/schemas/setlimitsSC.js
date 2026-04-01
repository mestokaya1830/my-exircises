const mongoose = require('mongoose')

const setlimitsSC = new mongoose.Schema({
  user:{type: String, required: true, default: 'tevye', lovercase: true, trim:true},
  admin:{type: String, required: true, default: 'tevye', trim:true},
  minms:{type: Number, required: true, default: 0, trim:true},
  maxms:{type: Number, required: true, default: 0, trim:true},
  minkm:{type: Number, required: true, default: 5, trim:true},
  maxkm:{type: Number, required: true, default: 1000, trim:true},
  maxkis:{type: Number, required: true, default: 100, trim:true},
  maxrate:{type: Number, required: true, default: 1000, trim:true},
  maxearn:{type: Number, required: true, default: 10000, trim:true},
  cminms:{type: Number, required: true, default: 0, trim:true},
  cmaxms:{type: Number, required: true, default: 0, trim:true},
  cminkm:{type: Number, required: true, default: 5, trim:true},
  cmaxkm:{type: Number, required: true, default: 1000, trim:true},
  cmaxrate:{type: Number, required: true, default: 1000, trim:true},
  cmaxearn:{type: Number, required: true, default: 10000, trim:true}
})

module.exports = mongoose.model('setlimits', setlimitsSC)