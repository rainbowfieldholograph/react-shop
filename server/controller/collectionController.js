const { Collection } = require('../models/models')
const ApiError = require('../error/ApiError')

class CollectionController {
  async create(req, res) {
    const { name, image } = req.body
    const collection = await Collection.create({ name, image })
    return res.json(collection)
  }
  async getAll(req, res) {
    const collections = await Collection.findAll()
    return res.json(collections)
  }
  async getOne(req, res) {
    const { id } = req.params
    const collection = await Collection.findOne({ where: { id } })
    return res.json(collection)
  }
}

module.exports = new CollectionController()
