const models = require('../models'); // loads index.js
const Solicitud_x_activo = models.Solicitud_x_activo; 

module.exports = {

    //GET
    async all(req, res) {
        let solicitud_activo = await Solicitud_x_activo.findAll();

        res.json(solicitud_activo);
    },

    //CREATE
    async create(req, res, next) {
        const solicitud_x_activo = await Solicitud_x_activo.build({
            solicitud_id: req.body.solicitud_id,
            activo_id: req.body.activo_id

        });
        await solicitud_x_activo.save()
        if (!solicitud_x_activo) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'éxito!'
        });
        req.solicitud_x_activo = solicitud_x_activo.activo_id
        console.log('req.solicitud_x_activo', req.solicitud_x_activo);
        next();
    },
}