const express = require("express");
const {
	getTransactionsByUserId,
	getTransactionById,
	addTransaction,
	updateTransaction,
	deleteTransaction,
} = require("../queries/transactionsQueries");

const transactions = express.Router();

const TRANSACTION_FIELDS = {
	current_user_id: true,
	transaction_amount: true,
	transaction_date: true,
	transaction_name: true,
	transaction_type: true,
	transaction_vendor: true,
};

const isvalidTransaction = (transaction) => {
	for (let field in TRANSACTION_FIELDS) {
		if (!transaction.hasOwnProperty(field)) {
			return false;
		}
	}

	for (let field in transaction) {
		if (!TRANSACTION_FIELDS[field]) {
			console.log(field, "here");
			return false;
		}
	}

	return true;
};

transactions.get("/", async (req, res) => {
	try {
		const { current_user_id } = req.query;
		const transactions = await getTransactionsByUserId(current_user_id);
		res.status(200).json({ data: transactions });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

transactions.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const transaction = await getTransactionById(id);
		if (transaction.id) {
			return res.json(transaction);
		} else {
			console.log(`Database error: ${transaction}`);
			throw `There is no transaction with id: ${id}`;
		}
	} catch (error) {
		res.status(404).json({ error: "Transaction not found.", message: error });
	}
});

transactions.post("/", async (req, res) => {
	try {
		const transaction = req.body;
		if (!isvalidTransaction(transaction)) {
			return res.status(400).json({
				error: `transaction must only have fields: ${Object.keys(
					TRANSACTION_FIELDS
				).join(", ")}`,
			});
		}
		const newTransaction = await addTransaction(transaction);
		res.status(201).json({ data: newTransaction });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

transactions.put("/:id", async (req, res) => {
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

transactions.delete("/:id", async (req, res) => {
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
