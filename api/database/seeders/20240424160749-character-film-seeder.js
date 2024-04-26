'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'character_films',
      [
        {
          character_id: 7,
          film_id: 1,
        },
        {
          character_id: 9,
          film_id: 2,
        },
        {
          character_id: 15,
          film_id: 3,
        },
        {
          character_id: 16,
          film_id: 3,
        },
        {
          character_id: 10,
          film_id: 4,
        },
        {
          character_id: 6,
          film_id: 5,
        },
        {
          character_id: 1,
          film_id: 6,
        },
        {
          character_id: 2,
          film_id: 6,
        },
        {
          character_id: 3,
          film_id: 6,
        },
        {
          character_id: 4,
          film_id: 6,
        },
        {
          character_id: 5,
          film_id: 6,
        },
        {
          character_id: 1,
          film_id: 7,
        },
        {
          character_id: 2,
          film_id: 7,
        },
        {
          character_id: 3,
          film_id: 7,
        },
        {
          character_id: 4,
          film_id: 7,
        },
        {
          character_id: 5,
          film_id: 7,
        },
        {
          character_id: 17,
          film_id: 8,
        },
        {
          character_id: 12,
          film_id: 9,
        },
        {
          character_id: 11,
          film_id: 10,
        },
        {
          character_id: 13,
          film_id: 11,
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('character_films', null, {})
  },
}
