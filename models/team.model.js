'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      Team.belongsToMany(models.User, {
        through: models.Vote,
        foreignKey: 'user_id',
        otherKey: 'team_id',
        timestamps: false,
      });

    }
  }
  Team.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    name: DataTypes.STRING,
    group_id:DataTypes.INTEGER,
    fifa_code: DataTypes.STRING,
    flag: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};
