const sequelize = require('../db.js')
const { DataTypes } = require('sequelize')

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  descr: { type: DataTypes.STRING },
  benefits: { type: DataTypes.ARRAY(DataTypes.STRING) },
})

const Collection = sequelize.define('collection', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
})

Collection.hasMany(Product)

module.exports = {
  Product,
  Collection,
}
