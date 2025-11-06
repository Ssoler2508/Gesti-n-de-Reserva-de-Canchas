const { Op } = require('sequelize');
const express = require('express');
const Estudiante = require('../models/Estudiante');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

// Ruta para estudiantes mayores a una edad
router.get('/mayores/:edad', async (req, res) => {
    try {
        const edadMinima = parseInt(req.params.edad, 10);
        const estudiantes = await Estudiante.findAll({
        where: {
            edad: { [Op.gt]: edadMinima }
        }
    });
    res.json(estudiantes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'error al obtener'});
    }
});


//CREATE (protegida)
router.post('/', authMiddleware, async (req, res) => {
    try {
        const estudiante = await Estudiante.create(req.body);
        res.json(estudiante);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//READ (todos) - protegido
router.get('/', authMiddleware, async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//READ (uno por id)
router.get('/:id', async (req, res) => {
    const estudiante = await Estudiante.findByPk(req.params.id);
    estudiante
    ? res.json(estudiante)
    : res.status(404).json({ error: 'no encontrado' });

});

//UPDATE (protegida)
router.put('/:id', authMiddleware, async (req, res) => {
    try{
        const estudiante = await Estudiante.findByPk(req.params.id);
        if (!estudiante) return res.status(404).json({ error: 'no encontrado' });

        await estudiante.update(req.body);
        res.json(estudiante);
    } catch (error) {
        res.status(400).json({ error : error.message });
    }
});

//DELETE (protegida)
router.delete('/:id', authMiddleware, async (req, res) => {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if (!estudiante) return res.status(404).json({ error: 'no encontrado' });

    await estudiante.destroy();
    res.json({ mensaje: 'Eliminado correctamente' });
});

module.exports = router;