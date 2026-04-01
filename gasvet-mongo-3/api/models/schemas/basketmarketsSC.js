const mongoose = require('mongoose')

const basketmarketsSC = new mongoose.Schema({
  mid:{type: Number, required: true, lovercase: true, trim:true},
  mn:{type: String, required: true, lovercase: true, trim:true}
}, {strict: false})

module.exports = mongoose.model('basketmarkets', basketmarketsSC)