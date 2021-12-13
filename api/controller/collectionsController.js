const prismaClient = require('../prismaClient.js')

class CollectionsController {
  async create(req, res) {
    try {
      const collection = await prismaClient.collection.create({
        data: req.body,
      })
      return res.json(collection)
    } catch (error) {
      console.log(error)
    }
  }

  async getAll(req, res) {
    try {
      const collection = await prismaClient.collection.findMany({ include: { products: true } })
      return res.json(collection)
    } catch (error) {
      console.log(error)
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params
      const collection = await prismaClient.collection.findUnique({
        where: { id: Number(id) },
        include: { products: true },
      })
      return res.json(collection)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new CollectionsController()
