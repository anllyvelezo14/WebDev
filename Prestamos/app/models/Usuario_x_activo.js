'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario_x_activo extends Model {
   
    static associate(models) {
      // define association here
      Usuario_x_activo.belongsTo(models.Usuario, { as: "intermediate_usuarios", foreignKey: "usuario_id", targetKey: "id" });
      Usuario_x_activo.belongsTo(models.Activo, { as: "intermediate_activos", foreignKey: "activo_id", targetKey: "id" });
    }
  }
  Usuario_x_activo.init({
      responsable: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuario_x_activo',
    tableName: 'Usuario_x_activos'
  });
  return Usuario_x_activo;
};