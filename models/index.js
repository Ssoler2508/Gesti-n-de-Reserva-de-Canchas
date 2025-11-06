const db = require ('../config/database');
const Usuario = require('./Usuarios');
const Perfil = require ('./Perfil');

    // relacion 1:1
Usuario.hasOne(Perfil, { onDELETE: 'CASCADE'});
Perfil.belongsTo(Usuario);

module.exports = { db, Usuario, Perfil };