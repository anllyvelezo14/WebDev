const express = require('express');
//const req = require('express/lib/request');
const router = express.Router();
const Usuario = require('../database/models/Usuario');
const Rol = require('../database/models/Rol');

// //Creando una ruta de prueba 
// router.get('/', (req, res) => {
//     res.json('Hola... esto funciona :D')
// });

//Index /api/usuarios
router.get('/', (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.json(usuarios);
    })
});

//ver los roles de usuario /api/usuarios/:id/roles
router.get('/:id/roles', (req, res) => {
    Usuario.findByPk(req.params.id).then(usuario => {
        usuario.getRols().then(roles => {
            res.json(roles);
        })
    });
});
//{ attributes: ['name', 'description'] }

//CREATE  
router.post('/',(req, res) => {
    Usuario.create({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password
    }).then(usuario => {
        res.json(usuario);
    })
})

//READ   /api/roles/:id
router.get('/:id', (req, res) => {
    Usuario.findByPk(req.params.id).then(usuario => {
        res.json(usuario);
    })
});

//UPDATE   /api/roles/:id
router.patch('/:id', (req,res) => {
    Usuario.update({
        name: req.body.name,
        lastname: req.body.lastname
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
    Usuario.destroy({
        where: {
            id: req.params.id
        }   
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;