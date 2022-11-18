'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Players extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Players.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      team_id: DataTypes.INTEGER,
      player_url: DataTypes.STRING,
      position_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Players',
    }
  );
  return Players;
};
