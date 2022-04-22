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

module.exports = {
    getTransactionsByUserId,
    getTransactionById
};