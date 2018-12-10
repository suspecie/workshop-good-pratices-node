const express = require('express');
const bodyParser = require('body-parser');

class Server {
    constructor({ router }) {
        //nao esqueca de coocar o ()
        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use('/api', router);
    }

    start() {
        return new Promise((resolve) => {
            this.express.listen(3000, () => {
                console.log('Listen in http://localhost:3000');
                resolve();
            })
        })
    }
}

module.exports = Server;