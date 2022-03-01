const Sequelize = require('sequelize');

const UsuarioModel = require('./models/usuarios');
const RolModel = require('./models/roles')

//conectando con la base de datos
//Oficina Usuario:root, Password: andrea
const sequelize = new Sequelize('bd_usuarios', 'root', 'root', {
    host:'localhost',
    dialect:'mysql'
});

const Usuario = UsuarioModel(sequelize,Sequelize);
const Rol = RolModel(sequelize,Sequelize);

//sincronizando con la base de datos
sequelize.sync({ forse: false })
    .then(()=> {
        console.log('tablas sincronizadas')
    // .catch(error =>{
    //     console.log('El error de la conexion es:' + error)
     });

module.exports = {
    Usuario,
    Rol
}

