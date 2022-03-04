const express = require('express');
const router = express.Router();

// Importar controladores
const UserController = require('./controllers/UserController');
const RolController = require('./controllers/RolController');

// Home
router.get('/', (req, res) => res.json({ foo: "bar" }));

// // Users
router.get('/users', UserController.all);
router.get('/roles', RolController.all);

module.exports = router;