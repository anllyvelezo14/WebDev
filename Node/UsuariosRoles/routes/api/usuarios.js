const router = require('express').Router();

const res = require('express/lib/response');
const { Usuario } = require('../../db');


//GET
router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

//POST
router.post('/', async (req, res) => {
    const usuario = await  Usuario.create(req.body);
    res.json(usuario);
});

//PUT
router.put('/:usuarioId', async (req,res) => {
    await Usuario.update(req.body, {
        where: { id: req.params.usuarioId} 
    });
    res.json({ success: 'Se ha modificado'});
});

//DELETE
router.delete('/:usuarioId', async (req,res) => {
    await Usuario.destroy({
        where: { id: req.params.usuarioId }
    });
    res.json({ success: 'Se ha borrado el usuario'});
});


module.exports = router;
