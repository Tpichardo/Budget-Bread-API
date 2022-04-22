const express = require('express');
const {
    getTransactionsByUserId,
    getTransactionById
} = require('../queries/transactionsQueries');

const transactions = express.Router();


transactions.get('/', async (req, res) => {
    try {
        const { currentUserId } = req.query;
        const transactions = await getTransactionsByUserId(currentUserId);
        res.json(transactions);
    } catch (error) {
        return error;
    }
});

transactions.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await getTransactionById(id);
        if (transaction.id) {
            return res.json(transaction);
        } else {
            console.log(`Database error: ${transaction}`);
            throw `There is no transaction with id: ${id}`
        }
    } catch (error) {
        res.status(404).json({ error: "Transaction not found.", message: error });
    }
});

module.exports = transactions;
