const mongoose = require('mongoose')

const creditlogSC = new mongoose.Schema({
  user:{type: String, required: true, lovercase: true, trim:true},
  admin:{type: String, required: true, lovercase: true, trim:true},
  superadmin:{type: String, required: true, lovercase: true, trim:true},
  date:{type: Date, required: true, default: Date.now(), trim:true},
  amount:{type: Number, required: true, trim:true},
  credit:{type: Number, required: true, trim:true},
  creditremain:{type: Number, required: true, trim:true},
  ope:{type: String, required: true, lovercase: true, trim:true},
  des:{type: String, required: true, lovercase: true, trim:true}
})

module.exports = mongoose.model('creditlogs', creditlogSC)