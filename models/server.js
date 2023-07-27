const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.paths = {
            uploads: '/api/uploads'
        }

        this.middlewares();
        this.routes();

    }

    middlewares() {
        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public') );

        this.app.use( fileupload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }

    routes() {
        this.app.use( this.paths.uploads, require('../routes/uploads') );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.info(`Server is running on port ${this.port}`);
        })
    }

}


module.exports = Server;


