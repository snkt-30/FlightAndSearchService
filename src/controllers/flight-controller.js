const { FlighService } = require("../services/index");

const flightService = new FlighService();

const createFlight = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);

    return res.status(200).json({
      data: flight,
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

const deleteFlight = async (req, res) => {
  try {
    const flight = await flightService.deleteFlight(req.body);

    return res.status(200).json({
      data: flight,
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


const getFlight = async (req, res) => {
  try {
    const flight = await flightService.getFlight(req.body);
    return res.status(200).json({
      data: flight,
      success: true,
      messaage: "Successfully get a city",
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


const getAllFlight = async (req, res) => {
  try {
    // console.log(req.params.minPrice);
    const flight = await flightService.getAllFlight(req.query);
    return res.status(200).json({
      data: flight,
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

module.exports = {
  createFlight,
  deleteFlight,
  getAllFlight,
  // getFlight,
};
