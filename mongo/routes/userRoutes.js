const express = require('express')
const router = express.Router()
const { 
    registerUser, 
    userLogin,
    getMe, 
    getAllUser,
    updateUser,
    deleteUser,
    getUserPro,
} = require('../controllers/userController')
const {protect} = require('../../middleware/authMiddleware')

router.post('/', registerUser)
router.route('/login').post(userLogin)
router.get('/all', protect, getAllUser)
router.get('/me', protect, getMe)
router.get('/:username', getUserPro)
router.route('/settings/:id').put(protect, updateUser).delete(protect, deleteUser)
module.exports = router