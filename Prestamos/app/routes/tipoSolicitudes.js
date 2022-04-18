const express = require('express');
const router = express.Router();

const TipoSolicitudController = require('../controllers/TipoSolicitudController');

//GET
router.get('/api/tipoSolicitudes'
,TipoSolicitudController.all
);

//CREATE
router.post('/api/tipoSolicitudes'
,TipoSolicitudController.create
);

module.exports = router;