const { Sequelize, DataTypes} = require('sequelize');
const config = require('../../config/database');
const db = {};

db.connection = new Sequelize(config.database, config.username, config.password, config);

// Vinculamos a nuestro modelos a BD
db.Usuario = require('../models/Usuario')(db.connection, DataTypes);
db.Activo = require('../models/Activo')(db.connection, DataTypes);
db.Usuario_x_activos = require('../models/Usuarios_x_activos')(db.connection, DataTypes);

module.exports = db;