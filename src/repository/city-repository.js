const { City } = require("../models/index");

class CityRepository {
  // For creating a city
  async createCity({ name }) {
    try {
      // City.create is a fucntion which take a object as parameter in which it expect key value pair or just value
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      // City.destroy function expect only object in which we can place where clause for filter the result which we ant to delete.
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async updateCity(cityId, data) {
    try {
      // const city = await City.update(data,{
      //   where:{
      //     id:cityId,
      //   }
      // });
      const city = await City.findOne({
        where: {
          id: cityId,
        },
      });

      city.update({ name: "Nagpur" });

      city.name = data.name;
      await city.save(); //->  data saving is async task to append write it in await only.
      return city;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findOne({ where: { id: cityId } });

      if (city === null) {
        throw ("City is not present");
      }
      return city;
    } catch (error) {
      console.log("Something went wrong in repository level");
      throw error;
    }
  }
}

module.exports = CityRepository;
