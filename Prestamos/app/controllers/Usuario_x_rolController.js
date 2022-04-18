const models = require('../models'); // loads index.js
const Usuario_x_rol = models.Usuario_x_rol; 

module.exports = {

    //GET
    async all(req, res) {
        let usuario_rol = await Usuario_x_rol.findAll();

        res.json(usuario_rol);
    },

    //CREATE
    async create(req, res, next) {
        const usuario_x_rol = await Usuario_x_rol.build({
            usuario_id: req.body.usuario_id,
            rol_id: req.body.activo_id

        });
        await usuario_x_rol.save()
        if (!usuario_x_rol) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'éxito!'
        });
        req.usuario_x_rol = usuario_x_activo.rol_id
        console.log('req.usuario_x_rol', req.usuario_x_rol);
        next();
    },
}