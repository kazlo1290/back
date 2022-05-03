const express = require('express')
const router = express.Router()
const { 
    registerUser, 
    loginCustomer, 
    loginSAdmin,
    getMe, 
    getAllUser,
    updateUser,
    deleteUser,
    getUserPro,
} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.route('/login').post(loginCustomer)
router.get('/all', protect, getAllUser)
router.get('/me', protect, getMe)
router.get('/:username', getUserPro)
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser)


router.route('/admin/login').post(loginSAdmin)
module.exports = router