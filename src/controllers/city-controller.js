const { CityService } = require("../services/index");

const cityService = new CityService();

const createCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);

    return res.status(201).json({
      data: city,
      success: true,
      messaage: "Successfully created a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create city",
      error: error,
    });
  }
};

//Delete ->   /city/:id
const deleteCity = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    console.log(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      messaage: "Successfully deleted  a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete city",
      err: error,
    });
  }
};

//Update  /city/:id
const updateCity = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);

    return res.status(200).json({
      data: response,
      success: true,
      messaage: "Successfully created a city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create city",
      error: error,
    });
  }
};

const getCity = async (req, res) => {
  try {
    const city = await cityService.getCity(req.query);
 
    return res.status(200).json({
      data: city,
      success: true,
      messaage: "Successfully fetch the city",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the  city",
      error: error,
    });
  }
};

module.exports = {
  createCity,
  updateCity,
  deleteCity,
  getCity,
};
