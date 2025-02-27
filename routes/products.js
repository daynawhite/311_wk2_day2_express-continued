const express = require('express')
const router = express.Router()

const productsController = require('../controllers/products')

router.get('/', productsController.list)

router.get ("/:id", productsController.list)

router.post("/", productsController.create)

module.exports = router;