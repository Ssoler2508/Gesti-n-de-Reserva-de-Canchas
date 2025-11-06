const {DataTypes} = require ('sequelize');
const db = require('../config/database');

const Perfil = db.define('Perfil', {
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Perfil;