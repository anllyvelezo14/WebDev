const express = require('express');
const router = express.Router();

const DepartamentoController = require('../controllers/DepartamentoController');

//GET
router.get('/api/departamentos'
,DepartamentoController.all
);

//CREATE
router.post('/api/departamentos'
,DepartamentoController.create
);


module.exports = router;