const mongoose = require('mongoose')

const soccerinplaymarketsSC = new mongoose.Schema({
  mid:{type: Number, required: true, trim:true},
  mn:{type: String, required: true, trim:true}
}, {strict: false})

module.exports = mongoose.model('soccerinplaymarkets', soccerinplaymarketsSC)