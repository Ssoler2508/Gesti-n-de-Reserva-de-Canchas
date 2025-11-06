const {DataTypes} = require ('sequelize');
const sequelize = require ('../config/database');
const bcrypt = require('bcrypt');
const { Database } = require('sqlite3');

const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
        
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
        validate: {
            isEmail: true
        }
    
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Usuario.beforeCreate(async (usuario) => {
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(usuario.password, salt);
});
module.exports = Usuario;