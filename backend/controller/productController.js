const ApiError = require('../error/ApiError')
const { Product } = require('../models/models')

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, image, descr, benefits, sizes, collectionId } = req.body
      const product = await Product.create({
        name,
        price,
        image,
        descr,
        benefits,
        sizes,
        collectionId,
      })
      return res.json(product)
    } catch (error) {
      next(ApiError.badRequest(error.message))
    }
  }
  async getAll(req, res) {
    const { collectionId } = req.query
    let products
    if (!collectionId) {
      products = await Product.findAll()
    } else if (collectionId) {
      products = await Product.findAll({ where: { collectionId } })
    }
    return res.json(products)
  }
  async getOne(req, res) {
    const { id } = req.params
    console.log('ID!!!!!!!!:', id)
    const product = await Product.findOne({ where: { id } })
    return res.json(product)
  }
}

module.exports = new ProductController()
