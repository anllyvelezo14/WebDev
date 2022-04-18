const models = require('../models'); // loads index.js
const EstadoSolicitud= models.EstadoSolicitud; 

module.exports = {

    //SHOW ALL
    async all(req, res, next) {
        let estadoSolicitudes = await EstadoSolicitud.findAll({

        });
        res.json(estadoSolicitudes);
        next();
    },

    //CREATE
    async create(req, res,next) {
        const estadoSolicitud = await EstadoSolicitud.build({
            nombre: req.body.nombre,
            descripcion: req.descripcion

        });
        await estadoSolicitud.save()
        if (!estadoSolicitud) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'El estado de la solicitud se creó con éxito!'
        });
        
        next();
    },

}