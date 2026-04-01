import express from 'express'
const app = express()
import cors from 'cors'
import db from './modules/db.js'
import Wrap from './modules/tryWrap.js'
import Nested from './modules/userSC.js'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

app.use(cors({credentials: true}))
app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '3mb' }))
app.use(express.static('dist'))


app.get('/api', Wrap(async(req, res) => {
  console.log(req.headers)
  res.json('Home Page')
}))
app.post('/api/limitsettings', Wrap(async(req, res) => {
  console.log(req.headers)
  res.json(req.body.limitsettings)
}))
app.post('/api/creditlogs', Wrap(async(req, res) => {
  res.json(req.body.creditlogs)
}))
app.post('/api/gamelogs', Wrap(async(req, res) => {
  res.json(req.body.gamelogs)
}))

if(process.env.NODE_ENV == 'production'){
  app.get('*', (req, res) => res.sendFile(path.resolve('dist/index.html')))
}

app.use((error, req, res, next) => {
  console.log(error)
})

app.use((req, res)=>{
  res.status(404).send('page not found')
})

app.listen(3000, () => {
  console.log('Server is running...')
})