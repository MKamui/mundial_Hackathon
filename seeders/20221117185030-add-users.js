const { faker } = require('@faker-js/faker');

('use strict');
module.exports = {
  async up(queryInterface, Sequelize) {
    var user = [];
    for (var i = 0; i < 20; i++) {
      user.push({
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      });
    }
    await queryInterface.bulkInsert('users', user, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
