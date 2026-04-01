import mongoose from "mongoose"

const usersSC = new mongoose.Schema({
  name:{type:String,required:true},
  lastname:{type:String,required:true},
  age:{type:Number,required:true}
})

export default mongoose.model('users', usersSC)