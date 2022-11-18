'use strict';

const teams = require('../teams');
const { Players } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let player = [];
    let teamIdCounter = 1;
    let playerName;
    let playerPostion;

    teams.forEach((team) => {
      while (true) {
        try {
          if (team.Arqueros.length > 0) {
            playerName = team.Arqueros.splice(0, 1).toString();
            playerPostion = 'Arqueros';
          } else if (team.Defensores.length > 0) {
            playerName = team.Defensores.splice(0, 1).toString();
            playerPostion = 'Defensores';
          } else if (team.Mediocampistas.length > 0) {
            playerName = team.Mediocampistas.splice(0, 1).toString();
            playerPostion = 'Mediocampistas';
          } else if (team.Delanteros.length > 0) {
            playerName = team.Delanteros.splice(0, 1).toString();
            playerPostion = 'Delanteros';
          } else {
            break;
          }
          player = Players.create({
            name: playerName,
            team_id: teamIdCounter,
            player_url: 'https://www.fichajes.com/jugador/',
            position_id: playerPostion,
          });
        } catch (error) {
          console.log(error);
        }
      }
      teamIdCounter++;
      // await queryInterface.bulkInsert('Players', player, {});
    });

    await queryInterface.bulkInsert('Players', await player, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  },
};
