const mongoose = require('mongoose')

const soccermarketsSC = new mongoose.Schema({
  mid:{type: Number, required: true, trim:true},
  mn:{type: String, required: true, trim:true}
}, {strict: false})

module.exports = mongoose.model('soccermarkets', soccermarketsSC)