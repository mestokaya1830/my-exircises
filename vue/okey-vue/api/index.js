import express from 'express'
const app = express()
import cors from 'cors'
import Router from './modules/router.js'

app.use(cors({ credentials: true, origin: true }))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))


app.use('/', Router)


app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.listen(3000, () => {
  console.log('Server is running...')
})
