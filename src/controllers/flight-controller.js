const { FlighService } = require("../services/index");

const flightService = new FlighService();

const createFlight = async (req, res) => {
  try {
    /**
     * we should always send the data which are mention in api contract like suppose frontend take more parameter than
     * needed in req.body then it may create havoc. so better we should always send the required data in req.body 
     * like this in flightRequestData. and it alwasy make req object bulky.
     */
    let flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);

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
