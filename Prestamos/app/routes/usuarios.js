const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');

//GET
router.get('/api/usuarios'
, UsuarioController.all);


//CREATE
router.post('/api/usuarios'
,UsuarioController.create,

);

module.exports = router;