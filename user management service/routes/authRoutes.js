const { signupUserController, loginUserController, signupGoogleUserController, verifyOtpController, resendOtpController, signupGoogleUserWithRoleController, verifyEmailController, verifyOtpSendFromForgotPasswordController, resetPasswordController } = require('../controllers/authController');

const router = require('express').Router();

//signpup a new user
router.post("/signup", signupUserController);


//login an existing user
router.post('/login', loginUserController)

//login an existing user
router.post('/signup/google', signupGoogleUserController)

//signup with role
router.post('/signup/google-role', signupGoogleUserWithRoleController)

//verify otp
router.post("/otp/verify", verifyOtpController);

//resend otp 
router.post("/otp/resend", resendOtpController);

//verify email on forgot password
router.post('/verify-email', verifyEmailController)

//verify otp on forgot password page
router.post("/password/forgot/otp/resend", verifyOtpSendFromForgotPasswordController);

//reset password to new one
router.post("/password/reset", resetPasswordController);

module.exports = router;