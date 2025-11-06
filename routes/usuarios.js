const express = require('express');
const router = express.Router();
const { verificarAdmin } = require('../middleware/authMiddleware');

const listaUsuarios = [
  { id: 1, nombre: 'Admin', rol: 'admin' },
  { id: 2, nombre: 'Carlos', rol: 'usuario' },
  { id: 3, nombre: 'Laura', rol: 'usuario' }
];

router.get('/', verificarAdmin, (req, res) => {
  // pasar el usuario actual a la vista para condicionales de rol
  res.render('usuarios', { usuarios: listaUsuarios, usuario: req.session.usuario });
});

module.exports = router;