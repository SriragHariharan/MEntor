const authMiddleware = require('../authMiddleware');
const { createBankAccount, getBankAccount } = require('../controllers/AccountControllers');
const { addTransactionController, getSpecificMentorTransactionsController } = require('../controllers/TransactionControllers');

const router = require('express').Router();

//add a bank account
router.post("/account/add", authMiddleware, createBankAccount);

//get a bank account
router.get("/account", authMiddleware, getBankAccount);


//WEBINAR ROUTES

//add participants to webinar
router.post("/transaction/add", authMiddleware, addTransactionController);

//get all transactions of a mentor
router.get("/transactions", authMiddleware, getSpecificMentorTransactionsController );

module.exports = router;