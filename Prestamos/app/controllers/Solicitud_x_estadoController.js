const models = require('../models'); // loads index.js
const Solicitud_x_estado = models.Solicitud_x_estado; 

module.exports = {

    //GET
    async all(req, res) {
        let solicitud_estado= await Solicitud_x_estado.findAll();

        res.json(solicitud_estado);
    },

    //CREATE
    async create(req, res, next) {
        const solicitud_x_estado = await Solicitud_x_estado.build({
            solicitud_id: req.body.solicitud_id,
            estado_id: req.body.estado_id

        });
        await solicitud_x_estado.save()
        if (!solicitud_x_estado) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'éxito!'
        });
        req.solicitud_x_estado = solicitud_x_estado.estado_id
        console.log('req.solicitud_x_estado', req.solicitud_x_estado);
        next();
    },
}