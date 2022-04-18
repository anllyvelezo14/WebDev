const express = require('express');
const router = express.Router();

const FacultadController = require('../controllers/FacultadController');

//GET
router.get('/api/facultades'
,FacultadController.all
);

//CREATE
router.post('/api/facultades'
,FacultadController.create
);


module.exports = router;