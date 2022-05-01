const express = require('express')
const router = express.Router()
const uploadMulter = require('../middleware/upload')
const validation = require('../middleware/validation')
const { 
    registerUser, 
    loginCustomer, 
    loginSAdmin,
    getMe, 
    getAllUser,
    updateUser,
    deleteUser,
    setImages,
} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.route('/login').post(loginCustomer)
router.get('/all', protect, getAllUser)
router.get('/me', protect, getMe)
router.post('/upload', uploadMulter, validation, setImages)
router.route('/:id').put(protect, updateUser).delete(protect, deleteUser)


router.route('/admin/login').post(loginSAdmin)
module.exports = router