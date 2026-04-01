import express from 'express';
import path from 'path';
import session from 'express-session';
import cookieParse from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParse());
// Node memory tabanlı session
// store eklemediğimiz için Express session default olarak MemoryStore kullanır
// uygulama kapanirsa session olur
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 30 * 60 * 1000,
    sameSite: 'lax' // the best is 'strict' but it can cause issues with some browsers, so 'lax' is a good compromise
  }
}));

// Goto index page
app.get('/', (req, res) => {
  console.log(req.session)
  // console.log(req.cookies)//with cookkie-parse
  console.log('Session data:', req.headers.cookie); // Client'tan gelen cookie'ler
  res.sendFile(path.resolve('./index.html'));
});

// Goto login page
app.get('/login', (req, res) => {
  res.sendFile(path.resolve('./login.html'));
});

// Post check login
app.post('/login', (req, res) => {
  if (req.body.username === 'mesto' && req.body.password === '9090') {
    req.session.auth = req.body.username; // session memory'de saklanıyor
    res.redirect('/admin');
  } else {
    res.redirect('/login');
  }
});

// Check admin page
app.get('/admin', (req, res) => {
  console.log('Session data:', req.session); // Node memory'de saklanan session
  if (req.session.auth) {
    res.sendFile(path.resolve('./admin.html'));
  } else {
    res.redirect('/login');
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    res.redirect('/login');
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});



