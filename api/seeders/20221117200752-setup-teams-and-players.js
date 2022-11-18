'use strict';

/** @type {import('sequelize-cli').Migration} */

const teams = require('../teams');
const { Team } = require('../models');

module.exports = {
  async up (queryInterface, Sequelize) {

    for (let i = 0; i < teams.length; i++) {

      try {
        await Team.create({

          name: teams[i].Nombre,
          fifa_code: teams[i].Codigo_Fifa,
          flag: teams[i].Bandera,
          group_id: teams[i].Grupo

        });


      } catch (error) {
        console.log(error);
      }

    }


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
