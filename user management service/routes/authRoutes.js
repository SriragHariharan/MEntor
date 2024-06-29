const { signupUserController, loginUserController, signupGoogleUserController } = require('../controllers/authController');

const router = require('express').Router();

//signpup a new user
router.post("/signup", signupUserController);


//login an existing user
router.post('/login', loginUserController)

//login an existing user
router.post('/signup/google', signupGoogleUserController)

module.exports = router;