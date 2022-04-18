'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario_x_rol extends Model {
   
    static associate(models) {
      // define association here
      Usuario_x_rol.belongsTo(models.Usuario, { as: "intermediate_usuarios", foreignKey: "usuario_id", targetKey: "id" });
      Usuario_x_rol.belongsTo(models.Rol, { as: "intermediate_rol", foreignKey: "rol_id", targetKey: "id" });
    }
  }
  Usuario_x_rol.init({
    
  }, {
    sequelize,
    modelName: 'Usuario_x_rol',
    tableName: 'Usuario_x_roles'
  });
  return Usuario_x_rol;
};