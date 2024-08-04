const authMiddleware = require('../authMiddleware');
const { createBankAccount } = require('../controllers/AccountControllers');

const router = require('express').Router();

//add a bank account
router.post("/account/add", authMiddleware, createBankAccount)

//update a bank account
router.put("/account/update", authMiddleware)

module.exports = router;