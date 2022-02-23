const express = require('express');
const app = express();
const mysql = require('mysql');
//const myConnection = require('express-myconnection');

//Settings: papra configurar express
app.set('port',process.env.PORT || 3000);

// creando conexion con la base 
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'bd_usuarios_roles'   
});

conexion.connect(function(error){
    if(error){
        throw error;  //capturando los errores
    }else{
        console.log('conexion exitosa¡¡¡¡¡');
    }
});

conexion.end()
 
//middlewares
// app.use(myConnection(mysql, {
//    host: 'localhost',
//    user: 'root',
//    password: 'root',
//    port: 3306,
//    database: 'bd_usuarios_roles' 
// }, 'sinlge' ));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});

