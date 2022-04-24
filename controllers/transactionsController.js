const express = require('express');
const {
    getTransactionsByUserId,
    getTransactionById,
    addTransaction,
    updateTransaction,
    deleteTransaction
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

transactions.post('/', async (req, res) => {
    try {
        const newTransaction = await addTransaction(req.body);
        if (newTransaction.id) {
            res.json(newTransaction);
        } else {
            console.log(req.body)
            throw `Error adding ${req.body} to the database.`;
        }
    } catch (error) {
        res.status(404).json({ error: error });
    }
});

transactions.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTransaction = await updateTransaction(id, req.body);
        if (updatedTransaction.id) {
            res.json(updatedTransaction);
        }
    } catch (error) {
        res.status(404).json({ error: error });
    }
});


transactions.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTransaction = await deleteTransaction(id);
        if (deletedTransaction.id) {
            res.json(deletedTransaction);
        }
    } catch (error) {
        res.status(404).json({ error: error });
    }
});


module.exports = transactions;
