'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.character, { as: 'characters', through: 'character_films', foreignKey: 'film_id' })
      this.belongsToMany(models.genre, { as: 'genres', through: 'film_genres', foreignKey: 'film_id' })
    }
  }
  film.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      release: DataTypes.DATE,
      stars: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'film',
      paranoid: true,
    }
  )
  return film
}
