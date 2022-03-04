 //const { Rol } = require('../database/db');
const Activo = require('../models/Activo');

module.exports = {

    async all(req, res) {
        let activo = await Activo.findAll();

        res.json(activo);
    }

}