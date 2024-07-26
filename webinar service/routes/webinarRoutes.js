const authMiddleware = require('../authMiddleware');
const { addNewWebinarController, getAllWebinarsController } = require('../controllers/webinarController');

const router = require('express').Router();

//add a new webinar
router.post("/webinar/add", authMiddleware, addNewWebinarController );

//get all webinars
router.get("/webinar/:option", authMiddleware, getAllWebinarsController );


module.exports = router;