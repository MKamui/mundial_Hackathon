('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    var vote = [];
    for (var i = 0; i < 20; i++) {
      vote.push({
        user_id: Math.floor(Math.random() * (21 - 1) + 1),
        team_id: Math.floor(Math.random() * (33 - 1) + 1),
      });
    }
    await queryInterface.bulkInsert('Votes', vote, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Votes', null, {});
  },
};
