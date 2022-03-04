'use strict';
const {Model} = require('sequelize');
//const Usuario = require('./Usuario');

module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.hasMany(models.Usuarios_x_activos, { as: "intermediate_activo", foreignKey: "activo_id" });
    }
  }
  Activo.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Activo',
  });
  return Activo;
};