const Router = require('express')
const router = new Router()

const collectionRouter = require('./collectionRouter')
const productRouter = require('./productRouter')

router.use('/collection', collectionRouter)
router.use('/product', productRouter)

module.exports = router
