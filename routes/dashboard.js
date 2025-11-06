const express = require('express');
const router = express.Router();
const { verificarLogin } = require('../middleware/authMiddleware');

router.get('/', verificarLogin, (req, res) => {
  // Depuración: mostrar en consola la sesión del usuario para comprobar rol/estado
  console.log('DEBUG - req.session.usuario ->', req.session ? req.session.usuario : undefined);
  const usuario = req.session.usuario;
  res.render('dashboard', { usuario });
});

module.exports = router;