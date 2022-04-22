const db = require('../db/dbConfig.js');

const getTransactionsByUserId = async (currentUserId) => {
    try {
        const userTransactions = await db.any("SELECT * FROM transactions WHERE current_user_id = $1", currentUserId);
        return userTransactions;
    } catch (error) {
        return error;
    }
};

const getTransactionById = async (id) => {
    try {
        const transaction = await db.one("SELECT * FROM transactions WHERE id = $1", id);
        return transaction;
    } catch (error) {
        return error;
    }
};

const addTransaction = async (transaction, currentUserId) => {
    try {
        const newTransaction = await db.one(
            "INSERT INTO transactions (current_user_id, transaction_date, transaction_name, transaction_type, transaction_amount, Transaction_vendor) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [currentUserId, transaction.transaction_date, transaction.transaction_name, transaction.transaction_type, transaction.transaction_amount, transaction.transaction_vendor]
        );
        return newTransaction;
    } catch (error) {
        return error;
    }
};

const updateTransaction = async (id, transaction) => {
    try {
        const updatedTransaction = await db.one(
            "UPDATE transactions SET current_user_id=$1, transaction_date=$2, transaction_name=$3, transaction_type=$4, transaction_amount=$5, transaction_vendor=$6 where id=$7 RETURNING *",
            [transaction.current_user_id, transaction.transaction_date, transaction.transaction_name, transaction.transaction_type, transaction.transaction_amount, transaction.transaction_vendor, id]
        );
        return updatedTransaction;
    } catch (error) {
        return error;
    }
};

const deleteTransaction = async (id) => {
    try {
        const deletedSong = await db.one("DELETE FROM transactions WHERE id=$1 RETURNING * ", id);
        return deletedSong;
    } catch (error) {
        return error;
    }
};


module.exports = {
    getTransactionsByUserId,
    getTransactionById,
    addTransaction,
    updateTransaction,
    deleteTransaction
};