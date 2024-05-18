const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Airport has been created successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Airport cannot able to create",
      error: error,
    });
  }
};

module.exports = {
  create,
};
