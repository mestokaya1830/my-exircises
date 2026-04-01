const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const db = mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser:true
}).then(()=>{
  console.log('Connected')
}).catch((err)=>{console.log(err)})

module.exports = db
