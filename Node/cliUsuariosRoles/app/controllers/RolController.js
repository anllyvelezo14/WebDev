 const { Rol } = require('../database/db');

module.exports = {

    async all(req, res) {
        let rol = await Rol.findAll();

        res.json(rol);
    }

}