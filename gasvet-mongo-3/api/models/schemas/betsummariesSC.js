const mongoose = require('mongoose')

const betsummariesSC = new mongoose.Schema({
  sumid:{type: Number, required: true, default: 0, trim:true},
  user:{type: String, required: true, lovercase: true, trim:true},
  admin:{type: String, required: true, lovercase: true, trim:true},
  superadmin:{type: String, required: true, lovercase: true, trim:true},
  date:{type: Date, required: true, default: Date.now(), trim:true},
  betscount:{type: Number, required: true, trim:true},
  betscountremain:{type: Number, required: true, trim:true},
  amount:{type: Number, required: true, trim:true},
  rate:{type: Number, required: true, trim:true},
  earn:{type: Number, required: true, trim:true},
  baseearn:{type: Number, required: true, trim:true},
  owner:{type: String, required: true, lovercase: true, trim:true},
  state:{type: String, required: true, lovercase: true, trim:true},
  userpay:{type: String, required: true, default:'no', lovercase: true, trim:true},
  adminpay:{type: String, required: true, default: 'no', lovercase: true, trim:true},
  stream:{type: String, required: true, lovercase: true, trim:true},
  role:{type: String, required: true, lovercase: true, trim:true},
  woncount:{type: Number, required: true, default: 0, trim:true},
  lostcount:{type: Number, required: true, default: 0, trim:true}
})

module.exports = mongoose.model('betsummaries', betsummariesSC)