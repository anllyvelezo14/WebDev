'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Facultad extends Model {
   
    static associate(models) {
      //Una facultad tiene muchos departamentos
      Facultad.hasMany(models.Departamento, { as: "departamentos", foreignKey: "facultad_id" });
    }
  }
  Facultad.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Facultad',
    tableName: 'Facultades'
  });
  return Facultad;
};