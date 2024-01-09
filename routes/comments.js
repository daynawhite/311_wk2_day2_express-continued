const express = require('express')
const router = express.Router()

const commentsController = require('../controllers/comments')

router.get('/', commentsController.list)

router.get ("/:id", commentsController.list)

router.post("/", commentsController.create)

module.exports = router;