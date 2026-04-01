const express = require('express')
const app = express()
const server  = require('http').createServer(app)
const io = require('socket.io')(server, {cors: "*"})

io.on('connection', (socket) => {
    console.log('Connected')
    socket.on('client', data => {
        // socket.broadcast.emit('server', data)//send to allclient expect self
        io.emit('server', data)
    })

    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
})

server.listen(3000, () => {
    console.log('Server is running...')
})
