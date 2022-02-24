const Sequelize = require('sequelize');
const UsuariosModel = require('./models/usuarios');

//conectando con la base de datos
const sequelize = new Sequelize('bd_usuarios', 'root', 'andrea', {
    host:'localhost',
    dialect:'mysql'
})

const Usuario = UsuariosModel(sequelize,Sequelize);

//sincronizando con la base de datos
sequelize.sync({ forse: false })
    .then(()=> {
        console.log('tablas sincronizadas')
    // .catch(error =>{
    //     console.log('El error de la conexion es:' + error)
     });


module.exports = {
    Usuario
}

