const { loginAdminController, getMentorMenteeCount, isAdminSessionController, getMentorsController, getMenteesController, getApprovalMentorsController } = require('../controllers/adminAuthController');
const { signupUserController, loginUserController, signupGoogleUserController, verifyOtpController, resendOtpController, signupGoogleUserWithRoleController, verifyEmailController, verifyOtpSendFromForgotPasswordController, resetPasswordController, signupMentorController } = require('../controllers/authController');
const adminAuthMiddleware = require('../helpers/adminAuthMiddleware');

const router = require('express').Router();

//signpup a new user
router.post("/signup", signupUserController);

//signpup a new user
router.post("/signup/mentor", signupMentorController);

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

//ADMIN ROUTES

//login admin
router.post("/admin/login", loginAdminController);

//get mentor and mentee count
router.get("/admin/count/users", adminAuthMiddleware, getMentorMenteeCount);

//get all approved mentors
router.get("/admin/mentors", adminAuthMiddleware, getMentorsController);

//get all approved mentors
router.get("/admin/mentors/approval", adminAuthMiddleware,  getApprovalMentorsController);

// get all mentees
router.get("/admin/mentees", adminAuthMiddleware, getMenteesController);

module.exports = router;