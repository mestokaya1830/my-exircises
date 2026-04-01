import express from 'express'
const app = express()
import cors from 'cors'
import helmet from 'helmet'
import db from './modules/db.js'
import Users from './modules/usersSC.js'

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())

app.get('/', async(req, res) => {
  res.json({title:'Home'})
})

app.get('/users', async(req, res) => {
  const result = await Users.find({})
  res.json({users:result})
})

app.get('/users/:id', async(req, res) => {
  const result = await Users.findOne({_id:req.params.id})
  res.json({user:result})
})

app.put('/updateuser', async(req, res) => {
    await Users.updateOne(
      {_id:req.body.id},
      { $set: { age: req.body.age } }
    )
  res.status(200).json('Updated')
})

app.delete('/usersdelete', async(req, res) => {
  await Users.deleteOne({_id:req.body.id})
  const result = await Users.find({})
  res.json({users:result})
})

app.post('/adduser', async(req, res) => {
  const newUser = new Users(req.body.user)
  await newUser.save()

  const result = await Users.find({})
  res.json({users:result})
})

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(3000, () => {
  console.log('Server is running...')
})