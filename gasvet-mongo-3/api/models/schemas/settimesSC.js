const mongoose = require('mongoose')

const settimesSC = new mongoose.Schema({
  user:{type: String, required: true, default: 'tevye', lovercase: true, trim:true},
  admin:{type: String, required: true, default: 'tevye', lovercase: true, trim:true},
  ilkcba:{type: Number, required: true, default: 0, trim:true},
  ilkcbk:{type: Number, required: true, default: 0, trim:true},
  ikicba:{type: Number, required: true, default: 45, trim:true},
  ikicbk:{type: Number, required: true, default: 45, trim:true},
  sk:{type: String, required: true, default: '00:00', trim:true},
  sa:{type: String, required: true, default: '00:00', trim:true},
  kbs:{type: Number, required: true, default: 12, trim:true}
})

module.exports = mongoose.model('settimes', settimesSC)