'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class film_genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.film, { foreignKey: 'film_id' })
      this.belongsTo(models.genre, { foreignKey: 'genre_id' })
    }
  }
  film_genre.init(
    {
      film_id: DataTypes.INTEGER,
      genre_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'film_genre',
      paranoid: true,
    }
  )
  return film_genre
}
