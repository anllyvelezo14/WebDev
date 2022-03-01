const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const apiRouter = require('./routes/api');

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api',apiRouter);

//Levantando la aplicacion
app.listen(5000, () => {
    console.log('Servidor arrancado');
});