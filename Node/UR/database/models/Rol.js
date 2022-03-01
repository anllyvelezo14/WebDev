const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Rol extends Model {}
Rol.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    sequelize,
    modelName: "rol"
});

module.exports = Rol;