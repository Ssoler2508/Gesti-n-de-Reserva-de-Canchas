const express = require('express');
const session = require('express-session');
const path = require('path');
const usuariosRouter = require('./routes/usuarios');
const dashboardRouter = require('./routes/dashboard');
const authRouter = require('./routes/auth');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secreto123',
  resave: false,
  saveUninitialized: true
}));

// montar router de autenticación (tiene POST /login y POST /register)
app.use('/', authRouter);

app.use('/usuarios', usuariosRouter);
app.use('/dashboard', dashboardRouter);

app.get('/login', (req, res) => {
  res.render('login');
});

app.listen(3000, () => console.log('Servidor http://localhost:3000'));