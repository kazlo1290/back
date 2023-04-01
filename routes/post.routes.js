// modules
const router = require('express').Router();
// src
const {
  getAllPosts,
  getPosts,
  setPosts,
  updatePosts,
  deletePosts,
} = require('../controllers/post.controller');
const { protect } = require('../middleware/auth');
// main
router
  .get('/', protect, getPosts)
  .post('/', protect, setPosts)
  .get('/all', getAllPosts)
  .delete('/:id', protect, deletePosts)
  .put('/:id', protect, updatePosts);

module.exports = router;
