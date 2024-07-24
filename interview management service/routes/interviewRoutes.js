const authMiddleware = require('../authMiddleware');
const { 
    addNewSlotController, 
    getSlotsByDateController, 
    getMySlotsByDateController, 
    deleteAspecificSlotController, 
    getMentorSlotsByDateController, 
    addReccuringSlotsController,
    addNewMeetingsController,
    isSlotBookedController,
    getAllMeetingsController,
    interviewMarkAsCompletedController,
    addInterviewFeedbackController,
    getInterviewFeedbackController
} = require('../controllers/interviewController');

const router = require('express').Router();

//add new slot
router.post("/slot/add/single", authMiddleware, addNewSlotController);

//add new recurring slot
router.post("/slot/add/reccuring", authMiddleware, addReccuringSlotsController);


//delete slot
router.delete("/slot/:slotID/delete", authMiddleware, deleteAspecificSlotController);

//get slots by date
router.post("/slots", authMiddleware, getSlotsByDateController );

//get my slots by date
router.post("/slots/me", authMiddleware, getMySlotsByDateController);

//get slots of a specific mentor by date
router.post("/slots/mentor/", authMiddleware, getMentorSlotsByDateController);

//get status of slot before booking
router.post("/slots/status/", authMiddleware, isSlotBookedController);

//add a new meeting
router.post("/meetings/add", authMiddleware, addNewMeetingsController);

//get meetings
router.get("/meetings", authMiddleware, getAllMeetingsController);

//interview mark as completed 
router.post("/meetings/complete", authMiddleware, interviewMarkAsCompletedController);

//add feedback for the completed meetings
router.post("/meetings/feedback", authMiddleware, addInterviewFeedbackController);

//get feedback for the completed meetings
router.get("/meetings/:interviewID/feedback", authMiddleware, getInterviewFeedbackController);

getInterviewFeedbackController

module.exports = router;