const { FlightRepository, AirplaneRepository } = require("../repository/index");

const { compare } = require("../utils/helper");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }

  async createFlight(data) {
    try {

      if(!compare(data.arrivalTime,data.departureTime)){
        throw {error:"Arrival time cannot be less than departure"};
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });

      return flight;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async deleteFlight(data) {
    try {
      const flight = await this.flightRepository.deleteFlight(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async getFlight(data) {
    try {
      const flight = await this.flightRepository.getFlight(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async getAllFlight(data) {
    try {
      const flight = await this.flightRepository.getAllFlight(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }
}

module.exports = FlightService;
