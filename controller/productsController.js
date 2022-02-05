const prismaClient = require('../prismaClient.js')

class ProductsController {
  async create(req, res) {
    try {
      const product = await prismaClient.product.create({
        data: req.body,
      })
      console.log(product)
      return res.json(product)
    } catch (error) {
      console.log(error)
    }
  }

  async getAll(req, res) {
    try {
      const products = await prismaClient.product.findMany({ include: { collection: true } })
      return res.json(products)
    } catch (error) {
      console.log(error)
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params
      const product = await prismaClient.product.findUnique({ where: { id: Number(id) } })
      return res.json(product)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ProductsController()
