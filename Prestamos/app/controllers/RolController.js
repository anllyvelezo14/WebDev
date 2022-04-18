const models = require('../models'); // loads index.js
const Rol = models.Rol; 


module.exports = {

    //SHOW ALL
    async all(req, res, next) {
        let roles = await Rol.findAll({

        });
        res.json(roles);
        next();
    },

    //CREATE
    async create(req, res,next) {
        const rol= await Rol.build({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion

        });
        await rol.save()
        if (!rol) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'El rol se creó con éxito!'
        });
        
        next();
    },

}