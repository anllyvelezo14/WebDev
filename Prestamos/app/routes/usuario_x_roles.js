const express = require('express');
const router = express.Router();

const Usuario_x_rolController = require('../controllers/Usuario_x_rolController')

//GET
router.get('/api/usuario-roles'
    ,Usuario_x_rolController.all
);

//CREATE
router.post('/api/usuario-roles'
    ,Usuario_x_rolController.create
);



module.exports = router;