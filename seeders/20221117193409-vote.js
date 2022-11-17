const { faker } = require('@faker-js/faker');

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    var vote = [];
    for (var i = 0; i < 20; i++) {
      vote.push({
        user_id: faker.random.numeric(1, { bannedDigits: ['0'] }),
        team_id: faker.random.numeric(1, { bannedDigits: ['0'] }),
      });
    }
    await queryInterface.bulkInsert('users', vote, {});
  },

  async down(queryInterface, Sequelize) {},
};
