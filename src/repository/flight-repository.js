const { Flights, Airplane } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  #createFilter(data) {
    // console.log(data);
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } },
    //     ],
    //   });
    // }

    let priceFilter = [];
    if (data.minPrice) {
      // Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    if (data.maxPrice) {
      // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }


    /**
     * in above we push two object in priceFilter array respectively saying tha greater than or lessthan or equal to 
     * so we are assinging this array in filter object as key value pair where key is [Op.and] and value is the array and
     * this here it will do like  [1 && 2 && 3] consider this element as array object in priceFilter. so it will do and operator 
     * on every object of array this wasy we will get value will be greater than or ewual to minPrice and value will be
     * less than or equal to maxPrice.   this is what logic says.
     */
    Object.assign(filter, { [Op.and]: priceFilter }); 

    // console.log(filter,priceFilter);
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async deleteFlight(flightNumber) {
    try {
      const flight = await Flights.destroy({
        where: {
          flightNumber: flightNumber,
        },
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async getFlight(flightNumber) {
    try {
      const flight = await Flights.findbyPk(flightNumber);
      return flight;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async getAllFlight(filter) {
    try {
      const filterObject = this.#createFilter(filter);

      console.log(filterObject);
      const flights = await Flights.findAll({
        where: filterObject,
      });
      // console.log(flights);
      return flights;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }
}

module.exports = FlightRepository;
