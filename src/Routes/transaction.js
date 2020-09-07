const express = require('express');
const transactioncontroller = require('../controllers/transaction')
const router = express.Router();
router.post('/v1/transaction-list', transactioncontroller.saveTransaction);
router.get('/v1/fuel-report', transactioncontroller.getFuelReport);
router.get('/v1/transaction-list', transactioncontroller.getTransactions);
module.exports = router;