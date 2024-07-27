const authMiddleware = require('../authMiddleware');
const { addNewWebinarController, getAllWebinarsController, getWebinarDetailsController } = require('../controllers/webinarController');

const router = require('express').Router();

//add a new webinar
router.post("/webinar/add", authMiddleware, addNewWebinarController );

//get all webinars
router.get("/webinar/:option", authMiddleware, getAllWebinarsController );

//get details of a webinar
router.get("/webinar/:webinarID/details", authMiddleware, getWebinarDetailsController );

module.exports = router;