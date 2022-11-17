'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teams', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      name: Sequelize.DataTypes.STRING,
      group_id: Sequelize.DataTypes.STRING,
      fifa_code: Sequelize.DataTypes.STRING,
      flag: Sequelize.DataTypes.STRING,

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('teams');

  }
};
