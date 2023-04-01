// modules
const router = require('express').Router();
// src
const {
  registerUser,
  userLogin,
  getMe,
  getAllUser,
  updateUser,
  deleteUser,
  getUserPro,
} = require('../controllers/user.controller');
const { protect } = require('../middleware/auth');
// main
router
  .get('/all', protect, getAllUser)
  .get('/me', protect, getMe)
  .get('/:username', getUserPro)
  .post('/login', userLogin)
  .post('/', registerUser)
  .put('/settings/:id', protect, updateUser)
  .delete('/settings/:id', protect, deleteUser);

module.exports = router;
