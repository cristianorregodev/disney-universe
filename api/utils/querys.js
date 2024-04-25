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

module.exports = { charactersQuerys }
