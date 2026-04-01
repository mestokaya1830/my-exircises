const mongoose = require('mongoose')

const soccerfixturesSC = new mongoose.Schema({
  fixtureid:{type: Number, required: true, trim:true},
  RegionId:{type: Number, required: true, trim:true},
  RegionName:{type: String, required: true, lovercase: true, trim:true},
  startdate:{type: Date, required: true, trim:true},
  leagueid:{type: Number, required: true, trim:true},
  leaguename:{type: String, required: true, lovercase: true, trim:true},
  HomeTeam:{type: String, required: true, lovercase: true, trim:true},
  AwayTeam:{type: String, required: true, lovercase: true, trim:true},
  home:{type: String, required: true, trim:true},
  draw:{type: String, required: true, trim:true},
  away:{type: String, required: true, trim:true},
  under:{type: String, trim:true},
  over:{type: String, trim:true},
  yes:{type: String, trim:true},
  no:{type: String, trim:true}
})

module.exports = mongoose.model('soccerfixtures', soccerfixturesSC)