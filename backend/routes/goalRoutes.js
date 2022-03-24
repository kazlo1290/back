const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    getPublicGoals,
    setGoals, 
    updateGoals, 
    deleteGoals 
} = require('../controllers/goalController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/all').get(getPublicGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals) 

module.exports = router