//const Facultad = require('../models/Facultad');
const models = require('../models'); // loads index.js
const Facultad= models.Facultad; 

module.exports = {

    //SHOW ALL
    async all(req, res, next) {
        let facultades = await Facultad.findAll({

        });
        res.json(facultades);
        next();
    },

    //CREATE
    async create(req, res,next) {
        const facultad= await Facultad.build({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion

        });
        await facultad.save()
        if (!facultad) {
            return res.status(200).send({
                status: 404,
                message: 'No se encontraron datos'
            });
        }
        res.status(200).send({
            status: 200,
            message: 'La facultad se creó con éxito!'
        });
        
        next();
    },

}