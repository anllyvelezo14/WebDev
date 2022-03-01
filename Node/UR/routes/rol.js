const express = require('express');
const router = express.Router();
const Rol = require('../database/models/Rol');

// //Creando una ruta de prueba 
// router.get('/', (req, res) => {
//     res.json('Hola... esto funciona :D')
// });

//Index /api/roles
router.get('/', (req, res) => {
    Rol.findAll().then(roles => {
        res.json(roles);
    })
});

//CREATE  
router.post('/',(req, res) => {
    Rol.create({
        name: req.body.name,
        description: req.body.description
    }).then(rol => {
        res.json(rol);
    })
})

//READ   /api/roles/:id
router.get('/:id', (req, res) => {
    Rol.findByPk(req.params.id).then(rol => {
        res.json(rol);
    })
});

//UPDATE   /api/roles/:id
router.patch('/:id', (req,res) => {
    Rol.update({
        name: req.body.name,
        description: req.body.description
    },{
        where:{
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

//DELETE /api/roles/:id
router.delete('/:id', (req, res) => {
    Rol.destroy({
        where: {
            id: req.params.id
        }   
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;