const express = require('express');
const router = express.Router();

const Solicitud_x_estadoController = require('../controllers/Solicitud_x_estadoController')

//GET
router.get('/api/solicitud-estados'
    ,Solicitud_x_estadoController.all
);

//CREATE
router.post('/api/solicitud-estados'
    ,Solicitud_x_estadoController.create
);

module.exports = router;