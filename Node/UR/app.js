const express = require('express');
const app = express();
const sequelize = require('./database/db');

require('./database/asociations');
// const Usuario = require('./database/models/Usuario');

//Settings
const PORT = process.env.PORT || 5000;

//Middleware: para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.get('/', function(req ,res) {
    res.json('HOLA MUNDO');

    // Usuario.create({
    //     name: "Luis",
    //     lastname: "Velez"
    // }).then(usuario => {
    //     res.json(usuario);
    // });

    // Usuario.findAll().then(usuarios => {
    //     res.json(usuarios);
    // });
});

app.use('/api/roles', require('./routes/rol'));
app.use('/api/usuarios', require('./routes/usuario'));

//Arrancando el servidor
app.listen(PORT, function(){
    console.log(`La app arranco en http://localhost:${PORT}`);

    // Conectando con la base de datos 
    sequelize.sync({force: false }).then(() => {
        console.log('Tablas sincronizadas');
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })
});