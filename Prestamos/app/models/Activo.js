'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
   
    static associate(models) {
      Activo.hasMany(models.Usuario_x_activo, { as: "intermediate_activos", foreignKey: "activo_id" });
      Activo.hasMany(models.Solicitud_x_activo, { as: "inter_activos", foreignKey: "activo_id" });
      
      //Un activo pertenece a un solo departamento
      Activo.belongsTo(models.Departamento, { as: "departamentos", foreignKey: "departamento_id", targetKey: "id" });
    
    }
  }
  Activo.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    categoria: DataTypes.STRING,
    numeroinventario: DataTypes.INTEGER,
    ubicacion: DataTypes.STRING,
    disponibilidad: DataTypes.INTEGER,
    estado: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Activo',
    tableName: 'Activos'
  });
  return Activo;
};