const Rol = require('./models/Rol');
const Usuario = require('./models/Usuario');

// Relacion Muchos a muchos 
// Un usuario tiene muchos roles, el mismo rol pertenece a muchos usuarios
Usuario.belongsToMany(Rol, { through: "Usuarios_x_roles"});
Rol.belongsToMany(Usuario, { through: "Usuarios_x_roles"});