const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url == '/' && req.method == 'GET') {
    fs.readFile('index.html', (req, data) => {
      res.end(data)
    })
  }
  if (req.url == '/home') {
    fs.readFile('home.html', (req, data) => {
      res.end(data)
    })
  }
})
server.listen(3003, () => {
  console.log('Server is running...' + 3003)
})