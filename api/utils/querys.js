const { Op } = require('sequelize')

const charactersQuerys = (params) => {
  const { name, age, movieId } = params
  const query = {}
  query['where'] = {}

  if (name) query['where'].name = { [Op.like]: `%${name}%` }
  if (age) query['where'].age = age
  if (movieId) query['include'] = [{ association: 'films', where: { id: movieId } }]

  return query
}

const moviesQuerys = (params) => {
  const { title, genre, order } = params
  const query = {}
  query['where'] = {}

  if (title) query['where'].title = { [Op.like]: `%${title}%` }
  if (genre) query['include'] = [{ association: 'genre', where: { id: genre } }]
  if (order) query['order'] = [['title', order]]

  return query
}

module.exports = { charactersQuerys, moviesQuerys }
