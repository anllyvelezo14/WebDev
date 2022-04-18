'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Solicitud_x_activo extends Model {
   
    static associate(models) {
      Solicitud_x_activo.belongsTo(models.Solicitud, { as: "intermediate_solicitud", foreignKey: "solicitud_id", targetKey: "id" });
      Solicitud_x_activo.belongsTo(models.Activo, { as: "inter_activos", foreignKey: "activo_id", targetKey: "id" });
    }
  }
  Solicitud_x_activo.init({
    
  }, {
    sequelize,
    modelName: 'Solicitud_x_activo',
    tableName: 'Solicitud_x_activos',
    //timestamps: false
  });
  return Solicitud_x_activo;
};