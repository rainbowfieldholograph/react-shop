const Router = require('express')
const router = new Router()

const productsController = require('../controller/productsController')

router.post('/', productsController.create)
router.get('/', productsController.getAll)
router.get('/:id', productsController.getOne)

module.exports = router
