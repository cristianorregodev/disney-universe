'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.film, { as: 'films', through: 'character_films', foreignKey: 'character_id' })
    }
  }
  character.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      age: DataTypes.INTEGER,
      weight: DataTypes.FLOAT,
      history: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'character',
      paranoid: true,
    }
  )
  return character
}
