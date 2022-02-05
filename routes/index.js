const Router = require('express')
const router = new Router()

const collectionsRouter = require('./collectionsRouter')
const productsRouter = require('./productsRouter')

router.use('/collections', collectionsRouter)
router.use('/products', productsRouter)

module.exports = router
