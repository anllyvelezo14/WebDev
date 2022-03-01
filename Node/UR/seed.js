const sequelize = require('./database/db');
const Rol = require('./database/models/Rol');
const Usuario = require('./database/models/Usuario');
require('./database/asociations');

// Usuarios
const usuarios = [
    { name: "Anton", lastname: "apellido", email: "anton@gmail", phone: "123", username: "Ant", password: "tna"},
    { name: "Pepe", lastname: "velez", email: "pepe@gmail", phone: "456", username: "pep", password: "epe"},
    { name: "Lucia", lastname: "orozco",email: "lu@gmail", phone: "678", username: "cia", password: "aic"},
];

// roles
const roles= [
    { name: "decano", description: "aquidescdecano"},
    { name: "docente", description: "aquidescdocente" },
    { name: "coordinador", description: "aquidesccoordina"},
];

sequelize.sync({ force: false }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    usuarios.forEach(usuario => Usuario.create(usuario));
}).then(() => {
    // Rellenar roles
    roles.forEach(rol => Rol.create(rol));
}).then(async () => {

    let user1 = await Usuario.create({ name: "Sergio", lastname: "lopez",email: "srg@gmail", phone: "111", username: "se", password: "es" });
    let user2 = await Usuario.create({ name: "Monica", lastname: "suarez",email: "mo@gmail", phone: "608", username: "ica", password: "mon" });

    let rol1 = await Rol.create({
        name: "secretaria",
        description: "aqui descripcion secretaria"
    });

    rol1.addUsuarios([ user1, user2 ]);
    
    

    // // Nuevo usuario
    // let user3 = await User.create({ name: "Paula", age: 16, email: "paula@gmail.com" });
    // user3.setBands([band1, band2]);

});