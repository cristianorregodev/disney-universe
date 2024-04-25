'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'characters',
      [
        {
          name: 'Mickey Mouse',
          image: 'https://example.com/mickey.jpg',
          age: '91',
          weight: '23',
          history: 'Mickey Mouse is a cartoon character created in 1928.',
        },
        {
          name: 'Minnie Mouse',
          image: 'https://example.com/minnie.jpg',
          age: '91',
          weight: '20',
          history: 'Minnie Mouse is a cartoon character created in 1928.',
        },
        {
          name: 'Donald Duck',
          image: 'https://example.com/donald.jpg',
          age: '86',
          weight: '26',
          history: 'Donald Duck is a cartoon character created in 1934.',
        },
        {
          name: 'Goofy',
          image: 'https://example.com/goofy.jpg',
          age: '87',
          weight: '46',
          history: 'Goofy is a cartoon character created in 1932.',
        },
        {
          name: 'Pluto',
          image: 'https://example.com/pluto.jpg',
          age: '91',
          weight: '27',
          history: 'Pluto is a cartoon character created in 1930.',
        },
        {
          name: 'Cinderella',
          image: 'https://example.com/cinderella.jpg',
          age: '69',
          weight: '49',
          history: 'Cinderella is a fictional character created by Walt Disney.',
        },
        {
          name: 'Snow White',
          image: 'https://example.com/snowwhite.jpg',
          age: '83',
          weight: '42',
          history: 'Snow White is a fictional character created by Walt Disney.',
        },
        {
          name: 'Ariel',
          image: 'https://example.com/ariel.jpg',
          age: '31',
          weight: '55',
          history: 'Ariel is a fictional character created by Walt Disney.',
        },
        {
          name: 'Belle',
          image: 'https://example.com/belle.jpg',
          age: '27',
          weight: '50',
          history: 'Belle is a fictional character created by Walt Disney.',
        },
        {
          name: 'Jasmine',
          image: 'https://example.com/jasmine.jpg',
          age: '25',
          weight: '54',
          history: 'Jasmine is a fictional character created by Walt Disney.',
        },
        {
          name: 'Pocahontas',
          image: 'https://example.com/pocahontas.jpg',
          age: '25',
          weight: '45',
          history: 'Pocahontas is a fictional character created by Walt Disney.',
        },
        {
          name: 'Mulan',
          image: 'https://example.com/mulan.jpg',
          age: '23',
          weight: '46',
          history: 'Mulan is a fictional character created by Walt Disney.',
        },
        {
          name: 'Tiana',
          image: 'https://example.com/tiana.jpg',
          age: '29',
          weight: '55',
          history: 'Tiana is a fictional character created by Walt Disney.',
        },
        {
          name: 'Rapunzel',
          image: 'https://example.com/rapunzel.jpg',
          age: '18',
          weight: '60',
          history: 'Rapunzel is a fictional character created by Walt Disney.',
        },
        {
          name: 'Merida',
          image: 'https://example.com/merida.jpg',
          age: '16',
          weight: '56',
          history: 'Merida is a fictional character created by Walt Disney.',
        },
        {
          name: 'Elsa',
          image: 'https://example.com/elsa.jpg',
          age: '24',
          weight: '59',
          history: 'Elsa is a fictional character created by Walt Disney.',
        },
        {
          name: 'Anna',
          image: 'https://example.com/anna.jpg',
          age: '24',
          weight: '41',
          history: 'Anna is a fictional character created by Walt Disney.',
        },
        {
          name: 'Moana',
          image: 'https://example.com/moana.jpg',
          age: '16',
          weight: '45',
          history: 'Moana is a fictional character created by Walt Disney.',
        },
        {
          name: 'Simba',
          image: 'https://example.com/simba.jpg',
          age: '25',
          weight: '200',
          history: 'Simba is a fictional character created by Walt Disney.',
        },
        {
          name: 'Mufasa',
          image: 'https://example.com/mufasa.jpg',
          age: '45',
          weight: '500',
          history: 'Mufasa is a fictional character created by Walt Disney.',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('characters', null, {})
  },
}
