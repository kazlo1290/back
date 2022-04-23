const express = require('express')
const router = express.Router()
const { 
    registerUser, 
    loginUser, 
    getMe, 
    getAllUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/all', protect, getAllUser)
router.get('/me', protect, getMe)
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser)

module.exports = router