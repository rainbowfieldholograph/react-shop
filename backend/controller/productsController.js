const { Product, Collection } = require('../models/models')

class ProductsController {
  async create(req, res) {
    return res.json(product)
  }

  async getAll(req, res) {
    return res.json(products)
  }

  async getOne(req, res) {
    return res.json(product)
  }
}

module.exports = new ProductsController()
