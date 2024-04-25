const Film = require('../models').film
const { moviesQuerys } = require('../utils/querys')

const list = async (req, res) => {
  try {
    const films = await Film.findAll(moviesQuerys(req.query))
    res.json({ films })
  } catch (error) {
    console.error('Error al obtener peliculas:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const create = async (req, res) => {
  try {
    const { characters, ...data } = req.body
    const movie = await Film.create(data)
    if (characters) await movie.setCharacters(characters)
    res.status(201).json({ movie })
  } catch (error) {
    console.error('Error al crear la película:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const edit = async (req, res) => {
  try {
    const { id } = req.params
    const { characters, ...data } = req.body
    await Film.update(data, { where: { id } })
    if (characters) {
      const movie = await Film.findByPk(id)
      const currentCharacters = await movie.getCharacters()
      await movie.removeCharacters(currentCharacters.filter((character) => !characters.includes(character.id)))
      await movie.addCharacters(
        characters.filter((id) => !currentCharacters.map((character) => character.id).includes(id))
      )
    }
    res.status(200).json({ message: 'Pelicula actualizada exitosamente' })
  } catch (error) {
    console.error('Error al editar la pelicula:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params
    await Film.destroy({ where: { id }, paranoid: true })
    res.status(200).json({ message: 'Pelicula eliminada exitosamente' })
  } catch (error) {
    console.error('Error al eliminar la pelicula:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}
module.exports = { list, create, edit, destroy }
