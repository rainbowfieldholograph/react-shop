const ApiError = require('../error/ApiError')
const { Product } = require('../models/models')

class ProductController {
  async create(req, res) {
    const { name, price, image, descr, benefits } = req.body
    const product = await Product.create({ name, price, image, descr, benefits })
    return res.json(product)
  }
  async getAll(req, res) {
    const products = await Product.findAll()
    return res.json(products)
  }
  async getOne(req, res, next) {
    const { id } = req.query
    if (!id) {
      return next(ApiError.badRequest('no id!'))
    }
    res.json(id)
  }
}

module.exports = new ProductController()
