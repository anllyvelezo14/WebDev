'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EstadoSolicitud extends Model {
   
    static associate(models) {
      //Un estado tiene muchas solicitudes asociadas
      EstadoSolicitud.hasMany(models.Solicitud_x_estado, { as: "inter_estado", foreignKey: "estado_id" });
    }
  }
  EstadoSolicitud.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'EstadoSolicitud',
    tableName: 'EstadoSolicitudes',
    //timestamps: false
  });
  return EstadoSolicitud;
};