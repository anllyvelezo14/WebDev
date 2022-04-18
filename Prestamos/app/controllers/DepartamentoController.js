const models = require('../models'); // loads index.js
const Departamento = models.Departamento; 

module.exports = {

    //SHOW ALL
    async all(req, res, next) {
        let departamentos = await Departamento.findAll({

        });
        res.json(departamentos);
        next();
    },

    //CREATE
    async create(req, res,next) {
        const departamento = await Departamento.build({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion

        });
        await departamento.save()
        if (!departamento) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'El departamento se creó con éxito!'
        });
        
        next();
    },

}