const express = require('express');
const router = express.Router();

const RolController = require('../controllers/RolController');

//GET
router.get('/api/roles'
,RolController.all
);

//CREATE
router.post('/api/roles'
,RolController.create
);


module.exports = router;