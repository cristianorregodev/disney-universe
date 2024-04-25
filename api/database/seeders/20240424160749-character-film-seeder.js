'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'character_films',
      [
        {
          character_id: 1,
          film_id: 1,
        },
        {
          character_id: 1,
          film_id: 2,
        },
        {
          character_id: 1,
          film_id: 5,
        },
        {
          character_id: 2,
          film_id: 6,
        },
        {
          character_id: 2,
          film_id: 1,
        },
        {
          character_id: 3,
          film_id: 10,
        },
        {
          character_id: 4,
          film_id: 20,
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('character_films', null, {})
  },
}
