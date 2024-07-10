const authMiddleware = require('../authMiddleware');
const { 
    addNewSlotController, 
    getSlotsByDateController, 
    getMySlotsByDateController, 
    deleteAspecificSlotController, 
    getMentorSlotsByDateController, 
    addReccuringSlotsController
} = require('../controllers/interviewController');

const router = require('express').Router();

//add new slot
router.post("/slot/add/single", authMiddleware, addNewSlotController)

//add new recurring slot
router.post("/slot/add/reccuring", authMiddleware, addReccuringSlotsController)


//delete slot
router.delete("/slot/:slotID/delete", authMiddleware, deleteAspecificSlotController)

//get slots by date
router.post("/slots", authMiddleware, getSlotsByDateController )

//get my slots by date
router.post("/slots/me", authMiddleware, getMySlotsByDateController)

//get slots of a specific mentor by date
router.post("/slots/mentor/", authMiddleware, getMentorSlotsByDateController)

module.exports = router;