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
            playerName = team.Arqueros[0];
            playerPostion = 'Arqueros';
          } else if (team.Defensores.length > 0) {
            playerName = team.Defensores.Arqueros[0];
            playerPostion = 'Defensores';
          } else if (team.Mediocampistas.length > 0) {
            playerName = team.Mediocampistas.Arqueros[0];
            playerPostion = 'Mediocampistas';
          } else if (team.Delanteros.length > 0) {
            playerName = team.Delanteros.Arqueros[0];
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
    });

    await queryInterface.bulkInsert('Players', player, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  },
};
