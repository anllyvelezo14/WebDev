//Gestor para las rutas 
const router = require('express').Router();

const apiUsuariosRouter = require('./api/usuarios');
const apiRolesRouter = require('./api/roles');

router.use('/usuarios', apiUsuariosRouter);
router.use('/roles', apiRolesRouter);

module.exports = router;

