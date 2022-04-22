const express = require('express');
const getTransactionsByUserId = require('../queries/transactionsQueries');
// const transactionsArr = require('../models/transactions');

const transactions = express.Router();


transactions.get('/', async (req, res) => {
    const { userId } = req.query
    const transactions = getTransactionsByUserId(userId);
    res.json(transactions);
});

transactions.get('/:index', (req, res) => {
    const { index } = req.params
    if (transactionsArr[index]) {
        res.status(200).json(transactionsArr[index])
    } else {
        res.redirect('/404')
    }
})

transactions.post('/', (req, res) => {
    transactionsArr.push(req.body)
    //send back the new resource as confirmation
    res.json(transactionsArr[transactionsArr.length - 1])
})

transactions.put('/:index', (req, res) => {
    const { index } = req.params
    if (transactionsArr[index]) {
        transactionsArr[index] = req.body
        res.json(transactionsArr[index])
    } else {
        res.redirect('/404')
    }
})

transactions.delete('/:index', (req, res) => {
    const { index } = req.params
    if (transactionsArr[index]) {
        const deletedTransaction = transactionsArr.splice(index, 1)
        res.json(deletedTransaction[0])
    } else {
        res.redirect('/404')
    }
})


module.exports = transactions;
