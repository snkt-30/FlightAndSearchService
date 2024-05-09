const express = require('express');

const Router = express.Router();

const cityController = require('../../controllers/city-controller');

Router.post('/city',cityController.createCity);
Router.delete('/city/:id',cityController.deleteCity);
Router.patch('/city/:id',cityController.updateCity);
Router.get('/city/:id',cityController.getCity);


module.exports=Router;

