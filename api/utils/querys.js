const { Op } = require('sequelize')

const charactersQuerys = (params) => {
  const { name, age, movieId } = params
  const query = {
    attributes: ['id', 'name', 'image'],
  }
  query['where'] = {}

  if (name) query['where'].name = { [Op.like]: `%${name}%` }
  if (age) query['where'].age = age
  if (movieId)
    query['include'] = [{ association: 'films', where: { id: movieId }, attributes: ['title', 'image', 'release'] }]

  return query
}

const moviesQuerys = (params) => {
  const { title, genre, order } = params
  const query = {
    attributes: ['id', 'title', 'image', 'release'],
  }
  query['where'] = {}

  if (title) query['where'].title = { [Op.like]: `%${title}%` }
  if (genre) query['include'] = [{ association: 'genres', where: { id: genre }, attributes: ['name', 'image'] }]
  if (order) query['order'] = [['title', order]]

  return query
}

module.exports = { charactersQuerys, moviesQuerys }
