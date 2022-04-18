const models = require('../models'); // loads index.js
const TipoSolicitud = models.TipoSolicitud; 

module.exports = {

    //SHOW ALL
    async all(req, res, next) {
        let tipoSolicitudes = await TipoSolicitud.findAll({

        });
        res.json(tipoSolicitudes);
        next();
    },

    //CREATE
    async create(req, res,next) {
        const tipoSolicitud = await TipoSolicitud.build({
            nombre: req.body.nombre,
            descripcion: req.descripcion

        });
        await tipoSolicitud.save()
        if (!tipoSolicitud) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'El tipo de solicitud se creó con éxito!'
        });
        
        next();
    },

}