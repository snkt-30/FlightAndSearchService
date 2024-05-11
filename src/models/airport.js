"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    /**
     * this models as parametere consisit of all the models in the project
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE",
      });
    }
  }
  airport.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      cityId: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
    },
    {
      sequelize,
      modelName: "airport",
    }
  );
  return airport;
};
