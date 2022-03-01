const router = require('express').Router();

const res = require('express/lib/response');
const { Rol } = require('../../db');

//GET
router.get('/', async (req, res) => {
    const roles = await Rol.findAll();
    res.json(roles);
});

//POST
router.post('/', async (req, res) => {
    const rol = await  Rol.create(req.body);
    res.json(rol);
});

//PUT
router.put('/:rolId', async (req,res) => {
    await Rol.update(req.body, {
        where: { id: req.params.rolId} 
    });
    res.json({ success: 'Se ha modificado'});
});

//DELETE
router.delete('/:rolId', async (req,res) => {
    await Rol.destroy({
        where: { id: req.params.rolId }
    });
    res.json({ success: 'Se ha borrado el rol'});
});


module.exports = router;