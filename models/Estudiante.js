const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Estudiante = db.define('Estudiante', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [16],
                msg: 'La edad debe ser mayor o igual a 16 años'
            }
        }
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true // validar Formato de correo
        }
    }
});

module.exports = Estudiante;