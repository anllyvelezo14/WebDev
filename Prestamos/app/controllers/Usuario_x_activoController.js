//const Usuario_x_activo = require('../models/Usuario_x_activo');
const models = require('../models'); // loads index.js
const Usuario_x_activo = models.Usuario_x_activo; 

module.exports = {

    //GET
    async all(req, res) {
        let usuario_activo = await Usuario_x_activo.findAll();

        res.json(usuario_activo);
    },

    //CREATE
    async create(req, res, next) {
        const usuario_x_activo = await Usuario_x_activo.build({
            estado: req.body.estado,
            prestado: req.body.prestado,
            usuario_id: req.body.usuario_id,
            activo_id: req.body.activo_id

        });
        await usuario_x_activo.save()
        if (!usuario_x_activo) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'éxito!'
        });
        req.usuario_x_activo = usuario_x_activo.activo_id
        console.log('req.usuario_x_activo', req.usuario_x_activo);
        next();
    },
}