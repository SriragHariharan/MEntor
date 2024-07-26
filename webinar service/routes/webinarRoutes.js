const authMiddleware = require('../authMiddleware');
const { addNewWebinarController } = require('../controllers/webinarController');

const router = require('express').Router();

router.post("/webinar/add", authMiddleware, addNewWebinarController );

module.exports = router;