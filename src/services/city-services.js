const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity({ name }) {
    try {
      const city = await this.cityRepository.createCity({ name });
      console.log(city);
      return city;
    } catch (error) {
      console.log("Something went wrong on service level");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      // console.log(response);
      return response;
    } catch (error) {
      console.log("Something went wrong on service level");
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      const response = await this.cityRepository.updateCity(cityId, data);
      return response;
    } catch (error) {
      console.log("Something went wrong on service level");
      throw error;
    }
  }

  async getCity(filter) {
    try {
         if(filter.name){
          const cities = await this.cityRepository.getCity({name:filter.name});
          return cities;
         }
      const response = await this.cityRepository.getCity(filter);
      return response;
    } catch (error) {
      console.log("Something went wrong on service level");
      throw error;
    }
  }
}

module.exports = CityService;
