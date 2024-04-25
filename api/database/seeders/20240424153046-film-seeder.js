'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'films',
      [
        {
          title: 'Snow White and the Seven Dwarfs',
          image: 'https://example.com/snow_white.jpg',
          release: '1937-12-21',
          stars: '4.5',
        },
        {
          title: 'Beauty and the Beast',
          image: 'https://example.com/beauty_beast.jpg',
          release: '1991-11-22',
          stars: '5',
        },
        {
          title: 'The Lion King',
          image: 'https://example.com/lion_king.jpg',
          release: '1994-06-15',
          stars: '4.8',
        },
        {
          title: 'Aladdin',
          image: 'https://example.com/aladdin.jpg',
          release: '1992-11-25',
          stars: '4.7',
        },
        {
          title: 'Cinderella',
          image: 'https://example.com/cinderella.jpg',
          release: '1950-03-04',
          stars: '4.3',
        },
        {
          title: 'Frozen',
          image: 'https://example.com/frozen.jpg',
          release: '2013-11-27',
          stars: '4.6',
        },
        {
          title: 'Moana',
          image: 'https://example.com/moana.jpg',
          release: '2016-11-23',
          stars: '4.4',
        },
        {
          title: 'Zootopia',
          image: 'https://example.com/zootopia.jpg',
          release: '2016-03-04',
          stars: '4.7',
        },
        {
          title: 'The Little Mermaid',
          image: 'https://example.com/little_mermaid.jpg',
          release: '1989-11-17',
          stars: '4.6',
        },
        {
          title: 'Toy Story',
          image: 'https://example.com/toy_story.jpg',
          release: '1995-11-22',
          stars: '4.8',
        },
        {
          title: 'Finding Nemo',
          image: 'https://example.com/finding_nemo.jpg',
          release: '2003-05-30',
          stars: '4.7',
        },
        {
          title: 'Monsters, Inc.',
          image: 'https://example.com/monsters_inc.jpg',
          release: '2001-11-02',
          stars: '4.5',
        },
        {
          title: 'Tangled',
          image: 'https://example.com/tangled.jpg',
          release: '2010-11-24',
          stars: '4.6',
        },
        {
          title: 'Mulan',
          image: 'https://example.com/mulan.jpg',
          release: '1998-06-19',
          stars: '4.4',
        },
        {
          title: 'Pocahontas',
          image: 'https://example.com/pocahontas.jpg',
          release: '1995-06-23',
          stars: '4.3',
        },
        {
          title: 'The Princess and the Frog',
          image: 'https://example.com/princess_frog.jpg',
          release: '2009-12-11',
          stars: '4.4',
        },
        {
          title: 'Big Hero 6',
          image: 'https://example.com/big_hero_6.jpg',
          release: '2014-11-07',
          stars: '4.5',
        },
        {
          title: 'Coco',
          image: 'https://example.com/coco.jpg',
          release: '2017-11-22',
          stars: '4.7',
        },
        {
          title: 'The Incredibles',
          image: 'https://example.com/incredibles.jpg',
          release: '2004-11-05',
          stars: '4.8',
        },
        {
          title: 'Up',
          image: 'https://example.com/up.jpg',
          release: '2009-05-29',
          stars: '4.7',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('films', null, {})
  },
}
