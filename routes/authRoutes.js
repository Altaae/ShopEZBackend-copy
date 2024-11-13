const express = require('express');
const authController = require('../controllers/authController');

const authValidators = require('../utils/validators/auth');
const { validate } = require('express-validator');

const router = express.Router();

// Registration route with validation
router.post('/register', 
    authValidators.register,
    (req, res, next) => {
        const errors = validate(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    authController.register
);

// Login route with validation
router.post('/login',
    authValidators.login,
    (req, res, next) => {
        const errors = validate(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    authController.login
);

module.exports = router;

module.exports = router; 
