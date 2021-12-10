const sequelize = require('../db.js')
const { DataTypes } = require('sequelize')

const Collection = sequelize.define('collection', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
})

const Product = sequelize.define('product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  sizes: { type: DataTypes.ARRAY(DataTypes.STRING) },
  descr: { type: DataTypes.STRING },
  benefits: { type: DataTypes.ARRAY(DataTypes.STRING) },
  collectionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // references: { model: Collection, key: 'id' },
  },
})

Product.belongsTo(Collection)
Collection.hasMany(Product, { foreignKey: 'collectionId' })

module.exports = {
  Product,
  Collection,
}
