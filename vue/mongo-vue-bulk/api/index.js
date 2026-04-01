import express from 'express'
import db from './db.js'
import cors from 'cors'
import helmet from 'helmet'
import users from './schema/usersSC.js'
const app = express()


app.use(express.json())
app.use(cors())
app.use(helmet())

app.get('/', async(req, res) => {
  const result = await users.find({})
  res.json(result)
})
app.post('/newuser', async(req, res) => {
  // var newusers = []
  // for (const key in req.body.newuser) {
  //   newusers.push({
  //     name:req.body.newuser[key].name,
  //     lastname:req.body.newuser[key].lastname,
  //     age:req.body.newuser[key].age
  //   })
  // }
  // let allusers = req.body.newuser.map(item => {
  //   return {
  //     name:item.name,
  //     lastname:item.lastname,
  //     age:item.age
  //   }
  // })
  try {
    await users.insertMany(req.body.newuser)
    console.log(req.body.newuser)
    res.json(res.statusCode)
  } catch (err) {
    console.log(err)
  }
})

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(3000, () => {
  console.log('Server is running...')
})