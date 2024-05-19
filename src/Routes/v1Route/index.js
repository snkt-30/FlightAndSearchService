const express = require("express");

const Router = express.Router();

const cityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const airportController = require("../../controllers/airport-controller");

const { FlightMiddleware } = require("../../middlewares/index");

Router.post("/city", cityController.createCity);
Router.delete("/city/:id", cityController.deleteCity);
Router.patch("/city/:id", cityController.updateCity);
Router.get("/city/:id", cityController.getCity);

Router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,//these are middleware
  flightController.createFlight
);
Router.delete("/flights", flightController.deleteFlight);
Router.get("/flights", flightController.getAllFlight);

Router.post("/airports", airportController.create);

module.exports = Router;
