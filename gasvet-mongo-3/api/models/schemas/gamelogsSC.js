const mongoose = require('mongoose')

const gamelogsSC = new mongoose.Schema({
  gameid:{type: Number, required: true, trim:true},
  user:{type: String, required: true, lovercase: true, trim:true},
  admin:{type: String, required: true, lovercase: true, trim:true},
  superadmin:{type: String, required: true, lovercase: true, trim:true},
  date:{type: Date, required: true, default: Date.now(), trim:true},
  amount:{type: Number, required: true, trim:true},
  creditremain:{type: Number, required: true, trim:true},
  ope:{type: String, required: true, lovercase: true, trim:true},
  des:{type: String, required: true, lovercase: true, trim:true}
})

module.exports = mongoose.model('gamelogs', gamelogsSC)