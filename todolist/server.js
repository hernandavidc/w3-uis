const express = require('express');
// const config = require('config');
// const initDebug = require('debug')('api:init');
// const dbDebug = require('debug')('api:db');
// const morgan = require('morgan');

// const userRoutes = require('../routes/users');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        // this.userPath = "/api/users";

        this.middlewares();
        // this.routes();
    }

    middlewares(){
        // this.app.use(express.json());
        // this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static('dist'));
    }

    routes(){
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor de express corriendo en el puerto 5000");
        })
    }
}

const server = new Server();

server.listen();