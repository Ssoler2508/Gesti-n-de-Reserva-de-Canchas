const {DataTypes} = require('sequelize');
const db = require('../config/database');


const Post = db.define(' Post ', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido: {
        type: DataTypes.TEXT
    }
});
module.exports = Post;
