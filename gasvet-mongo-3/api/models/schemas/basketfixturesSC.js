const mongoose = require('mongoose')

const basketfixturesSC = new mongoose.Schema({
  fixtureid:{type: Number, required: true},
  RegionId:{type: Number, required: true},
  RegionName:{type: String, required: true, lovercase: true, trim:true},
  startdate:{type: Date, required: true},
  leagueid:{type: Number, required: true},
  leaguename:{type: String, required: true, lovercase: true, trim:true},
  HomeTeam:{type: String, required: true, lovercase: true, trim:true},
  AwayTeam:{type: String, required: true, lovercase: true, trim:true},
  home:{type: String, required: true, trim:true},
  draw:{type: String, required: true, trim:true},
  away:{type: String, required: true, trim:true},
  under:{type: String, trim:true},
  underodds:{type: String, trim:true},
  over:{type: String, trim:true},
  overodds:{type: String, trim:true},
  han1:{type: String, trim:true},
  han1attr:{type: String, trim:true},
  han2:{type: String, trim:true},
  han2attr:{type: String, trim:true}
})

module.exports = mongoose.model('basketfixtures', basketfixturesSC)