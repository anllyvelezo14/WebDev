const express = require('express');
const router = express.Router();

const EstadoSolicitudController = require('../controllers/EstadoSolicitudController');

//GET
router.get('/api/estadoSolicitudes'
,EstadoSolicitudController.all
);

//CREATE
router.post('/api/estadoSolicitudes'
,EstadoSolicitudController.create
);

module.exports = router;