const express = require('express');
const router = express.Router();

const ActivoController = require('../controllers/ActivoController');
const Usuario_x_activoController = require('../controllers/Usuario_x_activoController')

//GET
router.get('/api/activos'
,ActivoController.all
);

//CREATE
router.post('/api/activos'
,ActivoController.create
,Usuario_x_activoController.create
);


module.exports = router;