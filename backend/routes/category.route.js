const express = require('express')
const router = express.Router()
const uploadMulter = require('../middleware/upload')
const validation = require('../middleware/validation')
const {
    createCategory
} = require('../controllers/category.controllers')

router.post('/category', uploadMulter, validation, createCategory)

module.exports = router