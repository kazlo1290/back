const express = require('express')
const router = express.Router()
const {
    getAllPosts,
    getPosts,
    setPosts,
    updatePosts,
    deletePosts
} = require('../controllers/postController')

const protect = require('../../middleware/authMiddleware')

router.route('/').get(protect, getPosts).post(protect, setPosts)
router.route('/all').get(getAllPosts)
router.route('/:id').delete(protect, deletePosts).put(protect, updatePosts) 

module.exports = router