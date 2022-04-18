// const Activo = require('../models/Activo');

const models = require('../models'); // loads index.js
const Activo = models.Activo; 
//const Usuario_x_activo = models.Usuario_x_activo;

module.exports = {

    //SHOW ALL
    async all(req, res, next) {
        let activos = await Activo.findAll({

        });
        res.json(activos);
        next();
    },

    //CREATE
    async create(req, res,next) {
        const activo = await Activo.build({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            categoria: req.body.categoria,
            numeroinventario: req.body.numeroinventario,
            ubicacion: req.body.ubicacion,
            disponibilidad: req.body.disponibilidad,
            estado: req.body.estado

        });
        await activo.save()
        if (!activo) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'El activo se creó con éxito!'
        });
        
        next();
    },

}