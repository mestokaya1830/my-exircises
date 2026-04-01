const mongoose = require('mongoose')

const anonsSC = new mongoose.Schema({
  anons:{type: String, required: true, lovercase: true, trim:true}
})

module.exports = mongoose.model('anons', anonsSC)