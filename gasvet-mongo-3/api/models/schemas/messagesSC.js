const mongoose = require('mongoose')

const messagesSC = new mongoose.Schema({
  user:{type: String, required: true, lovercase: true, trim:true},
  betweenmsg:{type: String, required: true, lovercase: true, trim:true},
  sender:{type: String, required: true, lovercase: true, trim:true},
  receiver:{type: String, required: true, lovercase: true, trim:true},
  msg:{type: String, required: true, lovercase: true, trim:true},
  type:{type: String, required: true, lovercase: true, trim:true},
  date:{type: Date, required: true, default: Date.now(), trim:true},
  readed:{type: String, required: true, lovercase: true, trim:true}
})

module.exports = mongoose.model('messages', messagesSC)