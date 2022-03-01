// const {Sequelize} = require("sequelize/types");

module.exports = (sequelize, type) => {
    return sequelize.define('usuario',{
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
            allownull: false,
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