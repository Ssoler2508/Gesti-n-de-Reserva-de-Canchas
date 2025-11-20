const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Usuario = require('./usuarios')(sequelize);
const Cancha = require('./canchas')(sequelize);
const Reservacion = require('./reservaciones')(sequelize);
const Pago = require('./pagos')(sequelize);

// Relaciones
Usuario.hasMany(Reservacion, { foreignKey: 'userId' });
Reservacion.belongsTo(User, { foreignKey: 'userId' });

Cancha.hasMany(Reservacion, { foreignKey: 'canchaId' });
Reservacion.belongsTo(Cancha, { foreignKey: 'canchaId' });

Reservacion.hasOne(Pago, { foreignKey: 'reservationId' });
Pago.belongsTo(Reservacion, { foreignKey: 'reservationId' });

module.exports = { sequelize, Sequelize, Usuario, Cancha, Reservacion, Pago };
