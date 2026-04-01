import express from 'express'
const app = express()
import 'dotenv/config'

app.use(express.json())


app.get('/', (req, res) => {
  res.status(200).json({title: 'Home'})
})

app.use((req, res) => {
  res.status(400).send('<h1>Page Not Found!</h1>')
})

app.use((err, req, res, next) => {
  console.log(err)
  next()
})



app.listen(process.env.PORT, () => console.log('Server is running...'))