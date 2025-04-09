const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'laser-tech-quiz-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 } // 1 hour
}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/dashboard', (req, res) => {
  // Check if user is logged in
  if (!req.session.user) {
    return res.redirect('/');
  }
  
  res.render('dashboard', { user: req.session.user });
});

app.get('/quiz', (req, res) => {
  // Check if user is logged in
  if (!req.session.user) {
    return res.redirect('/');
  }
  
  res.render('quiz', { user: req.session.user });
});

// New route for physics game
app.get('/physics-game', (req, res) => {
  // Check if user is logged in
  if (!req.session.user) {
    return res.redirect('/');
  }
  
  res.render('physics-game', { user: req.session.user });
});

// User registration
app.post('/register', (req, res) => {
  const { name, regNumber, email, password } = req.body;
  
  // For demo purposes, we're storing user in session
  // In a real app, you would store in database with password hashing
  req.session.user = { name, regNumber, email };
  
  res.redirect('/dashboard');
});

// User login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // For demo purposes, we're checking hardcoded values
  // In a real app, you would verify against database
  if (email === 'demo@example.com' && password === 'password') {
    req.session.user = { 
      name: 'Demo User', 
      regNumber: 'REG123456', 
      email: 'demo@example.com' 
    };
    return res.redirect('/dashboard');
  }
  
  res.render('login', { error: 'Invalid email or password' });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 