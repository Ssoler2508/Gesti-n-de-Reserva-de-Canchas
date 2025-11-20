const express = require('express');
const router = express.Router();

// Placeholder routes (completar luego)
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

module.exports = router;
