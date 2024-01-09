const express = require('express')
const router = express.Router()

const contactsController = require('../controllers/contacts')

router.get('/', contactsController.list)

router.get ("/:id", contactsController.list)

router.post("/", contactsController.create)

module.exports = router;