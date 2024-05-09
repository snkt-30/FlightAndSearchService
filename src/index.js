const express = require("express");

const { PORT } = require('./config/dotenv');

const Routes = require('./Routes/index');
const bodyParser = require("body-parser");

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,function startServer(){
        console.log(`Server is started at ${PORT}`)

        app.use('/api',Routes);

    })

};

setupAndStartServer();
