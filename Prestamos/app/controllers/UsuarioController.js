
//const Usuario = require('../models/Usuario')(sequelize, DataTypes);

const models = require('../models'); // loads index.js
const Usuario = models.Usuario; 

module.exports = {

    //GET
    async all(req, res, next) {
        let usuarios = await Usuario.findAll();
        res.json(usuarios);
        next();
    },


     //CREATE
     async create(req, res,next) {
        const usuario = await Usuario.build({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            constraseña: req.body.constraseña,
            correo: req.body.correo,
            documento:  req.body.documento 
        });
        await usuario.save()
        if (!usuario) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'El usuario se creó con éxito!'
        });
        next();
    },


}