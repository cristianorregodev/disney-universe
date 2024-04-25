'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'film_genres',
      [
        {
          film_id: 1,
          genre_id: 2,
        },
        {
          film_id: 1,
          genre_id: 1,
        },
        {
          film_id: 3,
          genre_id: 2,
        },
        {
          film_id: 4,
          genre_id: 5,
        },
        {
          film_id: 3,
          genre_id: 6,
        },
        {
          film_id: 6,
          genre_id: 2,
        },
        {
          film_id: 7,
          genre_id: 7,
        },
        {
          film_id: 2,
          genre_id: 2,
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('film_genres', null, {})
  },
}
