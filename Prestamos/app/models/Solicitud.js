'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Solicitud extends Model {
   
    static associate(models) {
      // Una solicitud solo tiene un tipo de solicitud
      Solicitud.belongsTo(models.TipoSolicitud, { as: "tipoSoicitudes", foreignKey: "tipoSolicitud_id", targetKey: "id" });
      
      // Una solicitud solo tiene un usuario asociado
      Solicitud.belongsTo(models.Usuario, { as: "usuarios", foreignKey: "usuario_id", targetKey: "id" });

      //Una solicitud tiene muchos activos asociados
      Solicitud.hasMany(models.Solicitud_x_activo, { as: "intermediate_solicitud", foreignKey: "solicitud_id" });
    
      //Una solicitud tiene muchos estados asociados
      Solicitud.hasMany(models.Solicitud_x_estado, { as: "intermeediate_estado", foreignKey: "estado_id" });
    }
  }
  Solicitud.init({
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'Solicitud',
    tableName: 'Solicitudes',
    //timestamps: false
  });
  return Solicitud;
};