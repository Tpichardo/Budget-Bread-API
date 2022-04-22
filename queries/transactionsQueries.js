const db = require('../db/dbConfig.js');

const getTransactionsByUserId = async (userId) => {
    try {
        const userTranasactions = await db.any(`SELECT * FROM transactions WHERE user_id = ${userId}`);
        return userTranasactions;
    } catch (error) {
        return error;
    }
}

module.exports = getTransactionsByUserId;