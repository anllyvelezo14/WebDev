const express = require('express');
const router = express.Router();

const SolicitudController = require('../controllers/SolicitudController');

//GET
router.get('/api/solicitudes'
,SolicitudController.all
);

//CREATE
router.post('/api/solicitudes'
,SolicitudController.create
);


module.exports = router;