'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    
    static associate(models) {
      // A un usuario estan asociados muchos activos Tabla intermedia 
      Usuario.hasMany(models.Usuario_x_activo, { as: "intermediate_usuarios", foreignKey: "usuario_id" });
      
      //Un usuario pertenece a un departamento
      Usuario.belongsTo(models.Departamento, { as: "departamentos", foreignKey: "departamento_id", targetKey: "id" });

      //Un usuario tiene muchas solicitudes asociadas
      Usuario.hasMany(models.Solicitud, { as: "solicitudes", foreignKey: "usuario_id" });
    }
  }

  Usuario.init({
    identificacion: {
      type: DataTypes.INTEGER,
      validation: {
          isInt: {
              args: true,
              msg: "La identificación debe contener solo números"
          },
          len: {
              args: [0, 12],
              msg: "no puede contener más de 12 dígitos"
          }
      }
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
          notNull: {
              msg: "Debe añadir un nombre"
          },
          isAlpha: {
              args: true,
              msg: "El nombre solo puede contener letras"
          },
          len: {
              args: [1, 30],
              msg: "El nombre no puede contener más de 30 caracteres"
          }
      }
    },

    apellido:{
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
          notNull: {
              msg: "Debe añadir un apellido"
          },
          isAlpha: {
              args: true,
              msg: "El apellido solo puede contener letras"
          },
          len: {
              args: [0, 30],
              msg: "El apellido no puede contener más de 30 caracteres"
          }
      }
    },
  
    constrasena: {
      type: DataTypes.STRING,
      allowNull: false,
      validation: {
          notNull: {
              msg: "Debe añadir una contraseña"
          },
          len: {
              args: [4, 100],
              msg: "La contraseña debe contener entre 4 y 100 caracteres"
          }
      }
    },

    correo: {
      type: DataTypes.STRING,
      unique: {
          args: true,
          msg: '¡Este email ya se encuentra registrado!'
      },
      validate: {
          len: {
              args: [0, 100],
              msg: "El correo debe contener menos de 40 caracteres"
          },
          isEmail: {
              args: true,
              msg: "El campo debe ser un correo valido"
          }
      }
    },

  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
    timestamps: true,
    createdAt: true,
    updatedAt: 'fecha_actualizacion', 
  });
  
  return Usuario;

};




























































































































