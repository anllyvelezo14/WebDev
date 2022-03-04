const { Usuario_x_activos } = require('../database/db');


module.exports = {

    async all(req, res) {
        let usuarios_x_activos = await Usuarios_x_activos.findAll();

        res.json(usuarios_x_activos);
    }

}