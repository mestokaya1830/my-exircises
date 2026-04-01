const mongoose = require('mongoose')

const loginlogSC = new mongoose.Schema({
  user:{type: String, required: true, lovercase: true, trim:true},
  admin:{type: String, required: true, lovercase: true, trim:true},
  superadmin:{type: String, required: true, lovercase: true, trim:true},
  date:{type: Date, required: true, default: Date.now(), trim:true},
  proccess:{type: String, required: true, trim:true},
  ip:{type: String, required: true, trim:true}
})

module.exports = mongoose.model('loginlogs', loginlogSC)