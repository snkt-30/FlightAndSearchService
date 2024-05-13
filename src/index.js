const express = require("express");
const bodyParser = require("body-parser");

const { SYNC_DB } = require("./config/dotenv");
const { PORT } = require("./config/dotenv");

const Routes = require("./Routes/index");
const db = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async function startServer() {
    
    console.log(`Server is started at ${PORT}`);

    app.use("/api", Routes);

    if (SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
