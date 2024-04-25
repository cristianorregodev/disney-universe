'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'genres',
      [
        {
          name: 'Animation',
          image: 'https://example.com/animation.jpg',
        },
        {
          name: 'Adventure',
          image: 'https://example.com/adventure.jpg',
        },
        {
          name: 'Fantasy',
          image: 'https://example.com/fantasy.jpg',
        },
        {
          name: 'Family',
          image: 'https://example.com/family.jpg',
        },
        {
          name: 'Musical',
          image: 'https://example.com/musical.jpg',
        },
        {
          name: 'Comedy',
          image: 'https://example.com/comedy.jpg',
        },
        {
          name: 'Drama',
          image: 'https://example.com/drama.jpg',
        },
        {
          name: 'Action',
          image: 'https://example.com/action.jpg',
        },
        {
          name: 'Science Fiction',
          image: 'https://example.com/scifi.jpg',
        },
        {
          name: 'Romance',
          image: 'https://example.com/romance.jpg',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('genres', null, {})
  },
}
