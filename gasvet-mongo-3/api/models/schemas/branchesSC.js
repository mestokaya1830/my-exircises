const mongoose = require('mongoose')

const branchesSC = new mongoose.Schema({
  bid:{type: Number, required: true, trim:true},
  bn:{type: String, required: true, trim:true}
}, { strict: false })

module.exports = mongoose.model('branches', branchesSC)