const { Sequelize, DataTypes} = require('sequelize');
const config = require('../../config/database');
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);

// Vinculamos a nuestro modelos a BD
db.User = require('../models/User')(db.connection, DataTypes);
db.Rol = require('../models/Rol')(db.connection, DataTypes);

module.exports = db;