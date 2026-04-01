import express from 'express'
const app = express()
import cors from 'cors'
import db  from './module/db.js'
import Users from './module/UsersSchema.js'
import http from 'http'
import { Server } from "socket.io"

// import { createAdapter } from "@socket.io/cluster-adapter"
// import { setupWorker } from "@socket.io/sticky"
const server = http.createServer(app)
const io = new Server(server,{
  cors: {
    origin: "http://localhost:5173" //give permission to client
  }
})
// io.adapter(createAdapter());
// setupWorker(io);


app.use(cors())
app.use(express.json())

app.get('/', async(req, res) => {
  res.json("message: Hello")
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('get-users', async() => {
    const result = await Users.find({}).sort({_id:-1})
    io.emit('send-users', result)
  })
  socket.on('add-user', async(user) => {
    const newUser = await new Users(user)
    await newUser.save()
  })
  socket.on('update-password', async(data) => {
    await Users.updateOne({_id:data.id}, {$set:{password:data.password}})
  })
  socket.on('delete-user', async(id) => {
    await Users.deleteOne({_id:id})
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(3000, () => {
  console.log('Server is running...')
})
