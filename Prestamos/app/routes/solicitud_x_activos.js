const express = require('express');
const router = express.Router();

const Solicitud_x_activoController = require('../controllers/Solicitud_x_activoController')

//GET
router.get('/api/solicitud-activos'
    ,Solicitud_x_activoController.all
);

//CREATE
router.post('/api/solicitud-activos'
    ,Solicitud_x_activoController.create
);

module.exports = router;

