const express = require('express')
const router = express.Router()

const vehiclesController = require('../controllers/vehicles')

router.get('/', vehiclesController.list)

router.get ("/:id", vehiclesController.list)

router.post("/", vehiclesController.create)

module.exports = router;