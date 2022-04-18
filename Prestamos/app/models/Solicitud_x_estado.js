'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Solicitud_x_estado extends Model {
   
    static associate(models) {
      Solicitud_x_estado.belongsTo(models.Solicitud, { as: "intermediate_solicitud", foreignKey: "solicitud_id", targetKey: "id" });
      Solicitud_x_estado.belongsTo(models.EstadoSolicitud, { as: "inter_estados", foreignKey: "estado_id", targetKey: "id" });
    }
  }
  Solicitud_x_estado.init({
    
  }, {
    sequelize,
    modelName: 'Solicitud_x_estado',
    tableName: 'Solicitud_x_estados',
    //timestamps: false
  });
  return Solicitud_x_estado;
};