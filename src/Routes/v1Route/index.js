const express = require("express");

const Router = express.Router();

const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");

Router.post("/city", cityController.createCity);
Router.delete("/city/:id", cityController.deleteCity);
Router.patch("/city/:id", cityController.updateCity);
Router.get("/city/:id", cityController.getCity);

Router.post("/flights", flightController.createFlight);
Router.delete("/flights", flightController.deleteFlight);
// Router.get("./flights/:id", flightController.getFlight);
Router.get("/flights", flightController.getAllFlight);

module.exports = Router;
