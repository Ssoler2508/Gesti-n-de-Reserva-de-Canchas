const express = require('express');
const router = express.Router();

// Importar rutas
const authRoutes = require('./auth');
const usuariosRoutes = require('./usuarios');


router.get('/canchas', async (req, res) => {
  const { Cancha } = require('../models');
  const canchas = await Cancha.findAll();
  res.json(canchas);
});

router.post('/reservaciones', async (req, res) => {
  const { Reservacion } = require('../models');
  const data = req.body;
  // Validaciones mínimas después
  const r = await Reservacion.create(data);
  res.status(201).json(r);
});

router.use('/auth', authRoutes);
router.use('/usuarios', usuariosRoutes);

module.exports = router;
