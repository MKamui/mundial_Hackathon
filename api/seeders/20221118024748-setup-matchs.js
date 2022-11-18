'use strict';
const { Match } = require('../models');

const matchsSchema = require('../matchs-schema');
const { STRING } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    for (let i = 0; i < matchsSchema.length; i++) {

      var date = new Date(matchsSchema[i].fecha_local);

      var day = date.toISOString().split('T')[0];
      //Estas -8 horas es para qye se guarde bien en la BD
      var dateLessFour = new Date(date.getTime() - 14400000 - 14400000);
      var hourReal = dateLessFour.toISOString();
      var hour = hourReal.split('T')[1];
      var hourToStore = hour.split(':00')[0] + ':00';
      var finalDate = day + ' ' + hourToStore;
      await Match.create({
        home: matchsSchema[i].id_equipo_local,
        visitor: matchsSchema[i].id_equipo_visitante,
        date_and_hour: finalDate
      })
      .then(()=>console.log('create'))
      .catch((error)=>console.log(error));
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
