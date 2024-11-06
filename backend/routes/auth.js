const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', register);

// Authenticate user and get token
router.post('/login', login);

// Get authenticated user's profile
router.get('/user', auth, getUser);

module.exports = router;