const db = require("../db/dbConfig.js");

const getTransactionsByUserId = async (current_user_id) => {
	const userTransactions = await db.any(
		"SELECT * FROM transactions WHERE current_user_id = $1",
		current_user_id
	);
	return userTransactions;
};

const getTransactionById = async (id) => {
	const transaction = await db.one(
		"SELECT * FROM transactions WHERE id = $1",
		id
	);
	return transaction;
};

const addTransaction = async (transaction) => {
	const newTransaction = await db.one(
		"INSERT INTO transactions (current_user_id, transaction_date, transaction_name, transaction_type, transaction_amount, Transaction_vendor) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
		[
			transaction.current_user_id,
			transaction.transaction_date,
			transaction.transaction_name,
			transaction.transaction_type,
			transaction.transaction_amount,
			transaction.transaction_vendor,
		]
	);
	return newTransaction;
};

const updateTransaction = async (id, transaction) => {
	const updatedTransaction = await db.one(
		"UPDATE transactions SET current_user_id=$1, transaction_date=$2, transaction_name=$3, transaction_type=$4, transaction_amount=$5, transaction_vendor=$6 where id=$7 RETURNING *",
		[
			transaction.current_user_id,
			transaction.transaction_date,
			transaction.transaction_name,
			transaction.transaction_type,
			transaction.transaction_amount,
			transaction.transaction_vendor,
			id,
		]
	);
	return updatedTransaction;
};

const deleteTransaction = async (id) => {
	const deletedSong = await db.one(
		"DELETE FROM transactions WHERE id=$1 RETURNING * ",
		id
	);
	return deletedSong;
};

module.exports = {
	getTransactionsByUserId,
	getTransactionById,
	addTransaction,
	updateTransaction,
	deleteTransaction,
};
