const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Reservacion', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
    canchaId: { type: DataTypes.INTEGER, allowNull: false },
    startAt: { type: DataTypes.DATE, allowNull: false },
    endAt: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.ENUM('reservada', 'cancelada', 'completada'), defaultValue: 'reservada' },
    total: { type: DataTypes.DECIMAL(10,2), allowNull: false, defaultValue: 0 },
  }, {
    tableName: 'reservaciones'
  });
};
