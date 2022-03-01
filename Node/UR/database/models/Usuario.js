const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Usuario extends Model {}
Usuario.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {
    sequelize,
    modelName: "usuario"
});

module.exports = Usuario;