const mongoose = require('mongoose')

const settingsSC = new mongoose.Schema({
  user:{type: String, lovercase: true, trim:true},
  admin:{type: String, lovercase: true, trim:true},
  type:{type: String, lovercase: true, trim:true},
  operate:{type: String, lovercase: true, trim:true},
  filterid:{type: Number, trim:true},
  rate:{type: Number, trim:true},
  state:{type: Boolean,  trim:true}
})

module.exports = mongoose.model('settings', settingsSC)