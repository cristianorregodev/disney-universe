'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'films',
      [
        {
          title: 'Snow White and the Seven Dwarfs',
          image: 'https://static.cinepolis.com/resources/mx/movies/posters/414x603/43894-878690-20230929012840.png',
          release: '1937-12-21',
          stars: '4.5',
        },
        {
          title: 'Beauty and the Beast',
          image: 'https://es.web.img2.acsta.net/medias/nmedia/18/78/63/96/19592613.jpg',
          release: '1991-11-22',
          stars: '5',
        },
        {
          title: 'The Lion King',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu1ycrHha9Sn2LpSlsEeDIspZHOZl1SjuBZsXq1jldjuNOFfCg',
          release: '1994-06-15',
          stars: '4.8',
        },
        {
          title: 'Aladdin',
          image:
            'https://cinematecadebogota.gov.co/sites/default/files/styles/318_x_460/public/afiches/s-l1600.jpg?itok=hS8ipWeR',
          release: '1992-11-25',
          stars: '4.7',
        },
        {
          title: 'Cinderella',
          image: 'https://lumiere-a.akamaihd.net/v1/images/p_cinderella_20490_a7c83808.jpeg',
          release: '1950-03-04',
          stars: '4.3',
        },
        {
          title: 'Fantasia',
          image: 'https://images.justwatch.com/poster/242202497/s718/fantasia.jpg',
          release: '2000-11-27',
          stars: '4.6',
        },
        {
          title: 'Mickey Once Upon a Christmas',
          image: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Mickey%27s_Once_Upon_A_Christmas.jpg',
          release: '1999-11-23',
          stars: '4.4',
        },
        {
          title: 'Toy Story',
          image: 'https://es.web.img3.acsta.net/pictures/14/03/17/10/20/509771.jpg',
          release: '1995-11-22',
          stars: '4.8',
        },
        {
          title: 'Mulan',
          image: 'https://es.web.img3.acsta.net/medias/nmedia/18/80/55/28/20134045.jpg',
          release: '1998-06-19',
          stars: '4.4',
        },
        {
          title: 'Pocahontas',
          image: 'https://musicart.xboxlive.com/7/87365600-0000-0000-0000-000000000002/504/image.jpg',
          release: '1995-06-23',
          stars: '4.3',
        },
        {
          title: 'The Princess and the Frog',
          image: 'https://lumiere-a.akamaihd.net/v1/images/p_theprincessandthefrog_20499_1c5f55a1.jpeg',
          release: '2009-12-11',
          stars: '4.4',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('films', null, {})
  },
}
