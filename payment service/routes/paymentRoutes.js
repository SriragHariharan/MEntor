const authMiddleware = require('../authMiddleware');
const { createBankAccount, getBankAccount } = require('../controllers/AccountControllers');

const router = require('express').Router();

//add a bank account
router.post("/account/add", authMiddleware, createBankAccount);

//get a bank account
router.get("/account", authMiddleware, getBankAccount);

//update a bank account
router.put("/account/update", authMiddleware)

module.exports = router;