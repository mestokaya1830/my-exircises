const mongoose = require('mongoose')

const betsSC = new mongoose.Schema([{
    betid:{type: Number, required: true, default: 0, trim:true},
    sumid:{type: Number, required: true, default: 0, trim:true},
    code:{type: Number, required: true, trim:true},
    user:{type: String, required: true, trim:true},
    admin:{type: String, required: true, trim:true},
    superadmin:{type: String, required: true, lovercase: true, trim:true},
    matches:{type: String, required: true, lovercase: true, trim:true},
    games:{type: String, required: true, lovercase: true, trim:true},
    options:{type: String, required: true, lovercase: true, trim:true},
    rate:{type: Number, required: true, trim:true},
    state:{type: String, required: true, lovercase: true, trim:true},
    stream:{type: String, required: true, lovercase: true, trim:true},
    date:{type: Date, required: true, default: Date.now()},
    scoreid:{type: Number, required: true, trim:true},
    eventtime:{type: String, required: true, trim:true},
    score:{type: String, trim:true}
    }
  ]
)

module.exports = mongoose.model('bets', betsSC)