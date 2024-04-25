'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class character_film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.character, { as: 'characters', foreignKey: 'character_id' })
      this.belongsTo(models.film, { as: 'films', foreignKey: 'film_id' })
    }
  }
  character_film.init(
    {
      character_id: DataTypes.INTEGER,
      film_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'character_film',
      paranoid: true,
    }
  )
  return character_film
}
