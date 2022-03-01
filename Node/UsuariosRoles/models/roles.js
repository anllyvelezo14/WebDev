module.exports = (sequelize, type) => {
    return sequelize.define('rol',{
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
        description:{
            type: type.STRING,
            allownull: true,
        },
    })
};