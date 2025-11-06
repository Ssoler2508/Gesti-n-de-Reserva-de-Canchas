const { DataTypes} = require('sequelize');
const db = require('../config/database');

const Curso = db.define('Curso', {
    nombre: DataTypes.STRING
});

module.exports = Curso;