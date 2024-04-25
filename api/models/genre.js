'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.film, { as: 'films', through: 'film_genres', foreignKey: 'genre_id' })
    }
  }
  genre.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'genre',
      paranoid: true,
    }
  )
  return genre
}
