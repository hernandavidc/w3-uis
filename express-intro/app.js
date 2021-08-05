const userRoutes = require('./routes/users');
const express = require('express');
const config = require('config');
const initDebug = require('debug')('api:init');
const dbDebug = require('debug')('api:db');
const userValir = require('./middlewares/auth');
const morgan = require('morgan');

const app = express();

if(app.get('env') === 'dev'){
    initDebug(' ---- Entorno de desarrollo ---- ')
    console.log('Mogar middleware... ')
    app.use(morgan('tiny'));
}

app.use(userValir);

//Connect to DB
console.log(`Db host: ${ config.get('dbConfig.host') }`);
console.log(`Db port: ${ config.get('dbConfig.port') }`);
dbDebug('--- Ok connect DB')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/users', userRoutes)

app.get('/', function(req, res){
    res.send('Estamos en el server de Express')
});

app.listen(5000, () => {
    console.log("Servidor de express corriendo en el puerto 5000");
})