'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Disney Universe',
          email: 'disney@disney.com',
          password: '$2a$10$Ep5ZrBYzuUFD8hinO4l.euiS9s0TGwZNUXJTa7H6sxyLqySmsmhDG', //12345678
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  },
}
