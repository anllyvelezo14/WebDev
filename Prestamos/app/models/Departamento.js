'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Departamento extends Model {
   
    static associate(models) {
     //Un departamento tiene muchos usuarios
     Departamento.hasMany(models.Usuario, { as: "usuarios", foreignKey: "departamento_id" });

     //Un departamento tiene muchos activos
     Departamento.hasMany(models.Activo, { as: "activos", foreignKey: "departamento_id" });

     //Un departamento pertenece a una sola facultad
     Departamento.belongsTo(models.Facultad, { as: "facultades", foreignKey: "facultad_id", targetKey: "id" });

    }
  }
  Departamento.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Departamento',
    tableName: 'Departamentos'
  });
  return Departamento;
};