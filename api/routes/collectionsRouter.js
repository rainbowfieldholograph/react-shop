const Router = require('express')
const router = new Router()

const collectionsController = require('../controller/collectionsController')

router.post('/', collectionsController.create)
router.get('/', collectionsController.getAll)
router.get('/:id', collectionsController.getOne)

module.exports = router
