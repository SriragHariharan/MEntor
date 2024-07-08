const authMiddleware = require('../authMiddleware');
const { addNewSlotController, getSlotsByDateController, getMySlotsByDateController, deleteAspecificSlotController } = require('../controllers/interviewController');

const router = require('express').Router();

//add new slot
router.post("/slot/add", authMiddleware, addNewSlotController)

//delete slot
router.delete("/slot/:slotID/delete", authMiddleware, deleteAspecificSlotController)

//get slots by date
router.post("/slots", authMiddleware, getSlotsByDateController )

//get my slots by date
router.post("/slots/me", authMiddleware, getMySlotsByDateController)

module.exports = router;