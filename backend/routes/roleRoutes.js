const express = require('express')
const router = express.Router()
const { 
    newRole,
    getRole,
    updateRole,
    deleteRole,
} = require('../controllers/roleController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').post(protect, newRole).get(protect, getRole)
router.route('/:id').put(protect, updateRole) .delete(protect, deleteRole)

module.exports = router