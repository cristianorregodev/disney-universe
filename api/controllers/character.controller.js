const Character = require('../models').character
const { charactersQuerys } = require('../utils/querys')

const list = async (req, res) => {
  try {
    const characters = await Character.findAll(charactersQuerys(req.query))
    res.json({ characters })
  } catch (error) {
    console.error('Error al obtener personajes:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const create = async (req, res) => {
  try {
    const { films, ...data } = req.body
    const character = await Character.create(data)
    if (films) await character.setFilms(films)
    res.status(201).json({ character })
  } catch (error) {
    console.error('Error al crear personaje:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const edit = async (req, res) => {
  try {
    const { id } = req.params
    const { films, ...data } = req.body
    await Character.update(data, { where: { id } })
    if (films) {
      const character = await Character.findByPk(id)
      const currentFilms = await character.getFilms()
      await character.removeFilms(currentFilms.filter((film) => !films.includes(film.id)))
      await character.addFilms(films.filter((id) => !currentFilms.map((film) => film.id).includes(id)))
    }
    res.status(200).json({ message: 'Personaje actualizado exitosamente' })
  } catch (error) {
    console.error('Error al crear personaje:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params
    await Character.destroy({ where: { id }, paranoid: true })
    res.status(200).json({ message: 'Personaje eliminado exitosamente' })
  } catch (error) {
    console.error('Error al crear personaje:', error)
    res.status(500).json({ error: 'Error interno del servidor' })
  }
}
module.exports = { list, create, edit, destroy }
