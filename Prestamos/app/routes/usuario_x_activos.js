const express = require('express');
const router = express.Router();

const Usuario_x_activoController = require('../controllers/Usuario_x_activoController')

//GET
router.get('/api/usuario-activos'
    ,Usuario_x_activoController.all
);

//CREATE
router.post('/api/usuario-activos'
    ,Usuario_x_activoController.create
);



module.exports = router;