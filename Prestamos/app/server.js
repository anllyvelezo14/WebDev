const express = require('express');
const app = express();
const { sequelize } = require('./models/index');

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Rutas

//Probando la raiz
app.get('/', function (req, res) {
    res.json({ hola: "Mundo "});
});

app.use(require('./routes/usuarios'));
app.use(require('./routes/activos'));
app.use(require('./routes/usuario_x_activos'));
app.use(require('./routes/roles'));
app.use(require('./routes/facultades'));
app.use(require('./routes/departamentos'));
app.use(require('./routes/solicitudes'));
app.use(require('./routes/tipoSolicitudes'));
app.use(require('./routes/estadoSolicitudes'));
app.use(require('./routes/solicitud_x_estados'));
app.use(require('./routes/solicitud_x_activos'));
app.use(require('./routes/usuario_x_roles'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);
    sequelize.sync({ force: false}).then(() => {
        console.log("Se ha establecido la conexión");
    })
});

