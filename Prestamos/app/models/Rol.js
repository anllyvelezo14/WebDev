'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
   
    static associate(models) {
      //Activo.hasMany(models.Usuario_x_activo, { as: "intermediate_activos", foreignKey: "activo_id" });
    }
  }
  Rol.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Rol',
    tableName: 'Roles'
  });
  return Rol;
};