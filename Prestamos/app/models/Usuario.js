'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      // A un usuario estan asociados muchos activos Tabla intermedia 
      Usuario.hasMany(models.Usuario_x_activo, { as: "intermediate_usuarios", foreignKey: "usuario_id" });
      
      //Un usuario solo pertenece a un departamento
      Usuario.belongsTo(models.Departamento, { as: "departamentos", foreignKey: "departamento_id", targetKey: "id" });

      //Un usuario tiene muchas solicitudes asociadas
      Usuario.hasMany(models.Solicitud, { as: "solicitudes", foreignKey: "usuario_id" });
    }
  }

  Usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    usuario: DataTypes.STRING,      //Nickname
    constraseña: DataTypes.STRING,
    correo: DataTypes.STRING,
    documento: DataTypes.INTEGER   //Cedula o TI

  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios'
  });
  
  return Usuario;

};