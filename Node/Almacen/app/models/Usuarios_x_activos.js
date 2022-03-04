'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuarios_x_activos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuarios_x_activos.belongsTo(models.Usuario, { as: "intermediate_usuario", foreignKey: "usuario_id", targetKey: "id" });
      Usuarios_x_activos.belongsTo(models.Activo, { as: "intermediate_activo", foreignKey: "activo_id", targetKey: "id" });
    }
  }
  Usuarios_x_activos.init({
    estado: DataTypes.STRING,
    prestado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios_x_activos',
  });
  return Usuarios_x_activos;
};