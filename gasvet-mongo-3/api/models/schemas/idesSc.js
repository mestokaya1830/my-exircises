const mongoose = require('mongoose')

const idesSC = new mongoose.Schema({
  betid:{type: Number, required: true, default: 1, trim:true},
  sumid:{type: Number, required: true, default: 1, trim:true}
})

module.exports = mongoose.model('ides', idesSC)