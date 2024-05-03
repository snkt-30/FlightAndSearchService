const express = require("express");

const setupAndStartServer = async () => {

    const app = express();

    app.listen(PORT,function startServer(){
        console.log(`Server is started at ${PORT}`)
    })

};

setupAndStartServer();
