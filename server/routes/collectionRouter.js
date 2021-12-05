const Router = require('express')
const router = new Router()
const collectionController = require('../controller/collectionController')

router.post('/', collectionController.create)
router.get('/', collectionController.getAll)
router.get('/:id')

module.exports = router
