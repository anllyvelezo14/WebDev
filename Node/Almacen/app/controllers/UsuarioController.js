const { Usuario } = require('../database/db');

module.exports = {

    async all(req, res) {
        let usuarios = await Usuario.findAll();

        res.json(usuarios);
    }

}