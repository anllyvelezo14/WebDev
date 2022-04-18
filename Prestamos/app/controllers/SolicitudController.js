const models = require('../models'); // loads index.js
const Solicitud= models.Solicitud; 

module.exports = {

    //SHOW ALL
    async all(req, res, next) {
        let solicitudes = await Solicitud.findAll({

        });
        res.json(solicitudes);
        next();
    },

    //CREATE
    async create(req, res,next) {
        const solicitud = await Solicitud.build({
            fecha_inicio: req.body.fecha_inicio,
            fecha_fin: req.body.fecha_fin

        });
        await solicitud.save()
        if (!solicitud) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'La solicitud se creó con éxito!'
        });
        
        next();
    },

}