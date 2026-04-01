import express from  'express'
const router = express.Router()
import mysql from  './db.js'
import wrapsync from  '../modules/wrapasync.js'

router.post('/login', wrapsync(async(req, res) => {     
  if (req.body.user) {
    const conn = await mysql.getConnection()
    conn.release()
    const result = await conn.query('SELECT user, pass FROM admin WHERE user = ? LIMIT 1', [req.body.user])
    if (result[0].length > 0) {
      if (result[0][0].pass == req.body.pass) {
        // req.session.auth = result[0][0]
        res.json({code: 200, auth: result[0][0]})
      }else{
        res.json({code:400})
      }
    } else {
      res.json({code: 400})
    }
  } 
}))

router.get('/logout', wrapsync(async (req, res) => {
  delete req.session.auth
  res.json({ ok: true })
}))

router.get('/users', wrapsync(async (req, res) => {   
  const conn = await mysql.getConnection()
  conn.release()
  const users = await conn.query('SELECT id, email, pass, level FROM users ORDER BY id DESC')
  res.json({code: 200,  users: users })
  // if (req.session.auth) {
  // } 
}))

router.post('/deleteuser', wrapsync(async (req, res) => {   
  const conn = await mysql.getConnection()
  conn.release()
  await conn.query('DELETE FROM users WHERE id = ?', [req.body.id])
  const users = await conn.query('SELECT id, email, pass, level FROM users ORDER BY id DESC')
  res.json({code: 200,  users: users })
  // if (req.session.auth) {
  // } 
}))

router.post('/register', wrapsync(async (req, res) => {     
  const conn = await mysql.getConnection()
  conn.release()
  const email = await conn.query('SELECT email FROM users WHERE email = ? LIMIT 1', [req.body.email])
  if (email[0].length > 0) {
    res.json({code: 400, message: 'Bu hesap kullanılmıstır!'})
  }else {
    var newUser = {
      email: req.body.email,
      pass: req.body.pass,
      level: 0
    }
    await conn.query('INSERT INTO users SET ?', [newUser])
    res.json({code: 200, message: 'Hediyeniz gün içinde yüklenecektir.'})
  }
}))

export default router