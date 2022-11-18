'use strict';
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {

      User.belongsToMany(models.Team, {
        through: models.Vote,
        foreignKey: 'user_id',
        otherKey: 'team_id',

      });
    }
  }

  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    surname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }

  }, {
    sequelize,
    modelName: 'User',
  });



  return User;

};
