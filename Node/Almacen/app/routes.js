const express = require('express');
const router = express.Router();

// Importar controladores
const UsuarioController = require('./controllers/UsuarioController');
const ActivoController = require('./controllers/ActivoController');
const Usuario_x_activosController = require('./controllers/Usuarios_x_activosController');

// Home
router.get('/', (req, res) => res.json({ foo: "bar" }));

// // Users
router.get('/usuarios', UsuarioController.all);
router.get('/activos', ActivoController.all);
router.get('/usuarios_x_activos', Usuario_x_activosController.all);

module.exports = router;