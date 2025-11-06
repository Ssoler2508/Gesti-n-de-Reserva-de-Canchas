const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuarios');
const router = express.Router();

// register
router.post('/register', async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;
        const existe = await Usuario.findOne({ where: { correo } });
        if (existe) return res.status(409).json({ error: 'Correo ya registrado' });

        const nuevoUsuario = await Usuario.create({ nombre, correo, password });
        const userData = nuevoUsuario.toJSON();
        delete userData.password;
        res.status(201).json({ mensaje: 'Usuario registrado', usuario: userData });
    } catch (error) {
        // manejar error de unique constraint por si hay carrera simultánea
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).json({ error: 'Correo ya registrado' });
        }
        res.status(400).json({ error: error.message });
    }
});

// login 

router.post('/login', async (req, res) => {
  const { correo, password } = req.body;

  // Usuario admin hardcodeado para pruebas
  // Credenciales aceptadas: 'admin' o 'admin@local' con password 'admin123'
  if ((correo === 'admin' || correo === 'admin@local') && password === 'admin123') {
    const usuarioAdmin = { id: 0, nombre: 'admin', correo: correo, rol: 'admin' };
    // establecer sesión y redirigir al dashboard (flujo web simple)
    req.session.usuario = usuarioAdmin;
    return res.redirect('/dashboard');
  }

  const usuario = await Usuario.findOne({ where: { correo } });
  if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

  const coincide = await bcrypt.compare(password, usuario.password);
  if (!coincide) return res.status(401).json({ error: 'Contraseña incorrecta' });

  const token = jwt.sign(
    { id: usuario.id, correo: usuario.correo },
    'clave_secreta', // cambiar por variable de entorno
    { expiresIn: '1h' }
  );

  // establecer sesión y redirigir al dashboard (usuario desde BD)
  req.session.usuario = { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo, rol: 'user' };
  res.redirect('/dashboard');
});

module.exports = router;