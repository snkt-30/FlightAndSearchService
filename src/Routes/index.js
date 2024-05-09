const express = require('express');

const Router = express.Router();


const v1Route = require('./v1Route/index');

Router.use('/v1',v1Route);


module.exports=Router;
