const express = require('express');
const config = require('config');
const initDebug = require('debug')('api:init');
const dbDebug = require('debug')('api:db');
const morgan = require('morgan');

const userRoutes = require('../routes/users');


class Server {
    constructor(){
        this.app = express();
        this.port = 5000;
        this.userPath = "/api/users";

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.get('/', function(req, res){
            res.send('Estamos en el server de Express')
        });

        this.app.use(this.userPath, userRoutes);
    }

    listen(){
        if(this.app.get('env') === 'dev'){
            initDebug(' ---- Entorno de desarrollo ---- ')
            console.log('Mogar middleware... ')
            this.app.use(morgan('tiny'));
        }
        
        //Connect to DB
        console.log(`Db host: ${ config.get('dbConfig.host') }`);
        console.log(`Db port: ${ config.get('dbConfig.port') }`);
        dbDebug('--- Ok connect DB')

        this.app.listen(this.port, () => {
            console.log("Servidor de express corriendo en el puerto 5000");
        })
    }
}

module.exports = Server;