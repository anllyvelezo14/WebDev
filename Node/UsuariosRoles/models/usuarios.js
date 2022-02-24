// const {Sequelize} = require("sequelize/types");

module.exports = (Sequelize, type) => {
    return Sequelize.define('usuarios',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allownull: true
        },
        name:{
            type: type.STRING,
            allownull: true,
        },
        lastname:{
            type: type.STRING,
            allownull: true,
        },
        email:{
            type: type.STRING,
            allownull: true,
        },
        phone: {
            type: type.INTEGER,
            allownull: false,
        },
        username: {
            type: type.STRING,
            allownull: false,
        },
        password:{
            type: type.STRING,
            allownull: false,
        }
    })
};