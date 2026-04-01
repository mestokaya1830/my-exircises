const mongoose = require('mongoose')

const usersSC = new mongoose.Schema({
  user:{type: String, required: true, unique: true, trim: true, lovercase: true, trim:true},
  nick:{type: String, required: true, unique: true, trim: true, lovercase: true, trim:true},
  pass:{type: String, required: true, trim: true, lovercase: true, trim:true},
  admin:{type: String, required: true, lovercase: true, trim:true},
  superadmin:{type: String, required: true, lovercase: true, trim:true},
  role:{type: String, required: true, lovercase: true, trim:true},
  credit:{type: Number, default: 0, trim: true, lovercase: true, trim:true},
  creditremain:{type: Number, default: 0, lovercase: true, trim:true},
  userlimit:{type: Number, default: 0, lovercase: true, trim:true},
  usedlimit:{type: Number, default: 0, lovercase: true, trim:true},
  date:{type: Date, default: Date.now, trim:true},
  state:{type: String, default: 'aktif', lovercase: true, trim:true},
  payment:{type: Date, lovercase: true, trim:true},
  usercomission:{type: Number, default: 40, lovercase: true, trim:true},
  personcomission:{type: Number, default: 5, lovercase: true, trim:true},
  fakelogin:{type: Number, default: 0, lovercase: true, trim:true},
  logincount:{type: Number, default: 5, trim:true},
  logincheck:{type: String, default: 'passive', lovercase: true, trim:true},
  multilogin:{type: Number, default: 0, trim:true},
  sessioncount:{type: Number, default: 0, trim:true},
  resetaccount:{type: Date, default: Date.now, lovercase: true, trim:true},
  autopay:{type: Number, default: 0, trim:true},
  usercancelbet:{type: Number, default: 15, lovercase: true, trim:true},
  personcancelbet:{type: Number, default: 15, lovercase: true, trim:true}
})

module.exports = mongoose.model('users', usersSC)