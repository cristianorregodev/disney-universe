'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'characters',
      [
        {
          name: 'Mickey Mouse',
          image: 'https://m.media-amazon.com/images/I/91pjeU8I1UL.jpg',
          age: '91',
          weight: '23',
          history: 'Mickey Mouse is a cartoon character created in 1928.',
        },
        {
          name: 'Minnie Mouse',
          image: 'https://d23.com/app/uploads/2013/04/1180w-600h_minnie-mouse_1.jpg',
          age: '91',
          weight: '20',
          history: 'Minnie Mouse is a cartoon character created in 1928.',
        },
        {
          name: 'Donald Duck',
          image: 'https://i.pinimg.com/736x/13/6c/13/136c13f7425cae5d3bf71b5bf8a41f6f.jpg',
          age: '86',
          weight: '26',
          history: 'Donald Duck is a cartoon character created in 1934.',
        },
        {
          name: 'Goofy',
          image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/goofy.jpg',
          age: '87',
          weight: '46',
          history: 'Goofy is a cartoon character created in 1932.',
        },
        {
          name: 'Pluto',
          image: 'https://i.pinimg.com/736x/22/d8/41/22d841a04bf3959e2179d1707f53d586.jpg',
          age: '91',
          weight: '27',
          history: 'Pluto is a cartoon character created in 1930.',
        },
        {
          name: 'Cinderella',
          image: 'https://www.pngitem.com/pimgs/m/525-5257258_cinderella-disney-princess-hd-png-download.png',
          age: '69',
          weight: '49',
          history: 'Cinderella is a fictional character created by Walt Disney.',
        },
        {
          name: 'Snow White',
          image: 'https://www.greenscene.co.id/wp-content/uploads/2022/04/Snow-White.jpg',
          age: '83',
          weight: '42',
          history: 'Snow White is a fictional character created by Walt Disney.',
        },
        {
          name: 'Ariel',
          image: 'https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/d/35487/files/2015/12/The-little-mermaid-ariel.jpg',
          age: '31',
          weight: '55',
          history: 'Ariel is a fictional character created by Walt Disney.',
        },
        {
          name: 'Belle',
          image: 'https://i.insider.com/6328b222edbe7f00190edf5b?width=1136&format=jpeg',
          age: '27',
          weight: '50',
          history: 'Belle is a fictional character created by Walt Disney.',
        },
        {
          name: 'Jasmine',
          image: 'https://www.rotoscopers.com/wp-content/uploads/2013/10/jamsine-princess-disney.jpg',
          age: '25',
          weight: '54',
          history: 'Jasmine is a fictional character created by Walt Disney.',
        },
        {
          name: 'Pocahontas',
          image: 'https://static.tvtropes.org/pmwiki/pub/images/pocahontas-dp_5151.jpg',
          age: '25',
          weight: '45',
          history: 'Pocahontas is a fictional character created by Walt Disney.',
        },
        {
          name: 'Mulan',
          image: 'https://comicvine.gamespot.com/a/uploads/scale_small/6/60392/1716995-mulan.jpg',
          age: '23',
          weight: '46',
          history: 'Mulan is a fictional character created by Walt Disney.',
        },
        {
          name: 'Tiana',
          image: 'https://i.pinimg.com/originals/ab/e1/4e/abe14e4ef9757e4f3d14853e3dcf28e1.jpg',
          age: '29',
          weight: '55',
          history: 'Tiana is a fictional character created by Walt Disney.',
        },
        {
          name: 'Rapunzel',
          image: 'https://i.pinimg.com/564x/eb/1d/53/eb1d539ca5a1e601185ef2ba517c02de.jpg',
          age: '18',
          weight: '60',
          history: 'Rapunzel is a fictional character created by Walt Disney.',
        },
        {
          name: 'Simba',
          image: 'https://en.wikifur.com/w/images/7/7e/AdultSimba.jpg',
          age: '25',
          weight: '200',
          history: 'Simba is a fictional character created by Walt Disney.',
        },
        {
          name: 'Mufasa',
          image: 'https://i.pinimg.com/originals/d7/c8/31/d7c831ed5fe5bec424f0cd35402a05ae.jpg',
          age: '45',
          weight: '500',
          history: 'Mufasa is a fictional character created by Walt Disney.',
        },
        {
          name: 'Buzz Lightyear',
          image: 'https://pbs.twimg.com/media/EFzm09EWoAEqAFm.jpg',
          age: '45',
          weight: '500',
          history: 'Buzz Lightyear is a fictional character created by Disney.',
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('characters', null, {})
  },
}
