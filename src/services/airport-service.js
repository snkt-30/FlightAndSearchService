const CrudService = require("./crud-service");

const { AirportRepository } = require("../repository/index");

const airportRepository = new AirportRepository();
class AirportService extends CrudService {
  constructor() {
    super(airportRepository);
     // this.airportRepository = new AirportRepository();  // i can do this also but it is instance based and and above is 
    //scope based
  }
}



module.exports = AirportService;
