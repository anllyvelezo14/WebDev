'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TipoSolicitud extends Model {
   
    static associate(models) {
      //Un tipo de solicitud tiene muchas solicitudes asociadas
      TipoSolicitud.hasMany(models.Solicitud, { as: "solicitudes", foreignKey: "tipoSolicitud_id" });
    }
  }
  TipoSolicitud.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'TipoSolicitud',
    tableName: 'TipoSolicitudes',
    //timestamps: false
  });
  return TipoSolicitud;
};