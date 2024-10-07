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
	id: true,
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
			return false;
		}
	}

	return true;
};

const isValidId = (id) => {
	const idAsNum = Number(id);
	return Number.isInteger(idAsNum) && idAsNum > 0;
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
	try {
		const { id } = req.params;
		if (!isValidId(id)) {
			return res
				.status(400)
				.json({ error: `the id must be a positive integer, received ${id}` });
		}
		const transaction = await getTransactionById(id);
		if (!transaction) {
			return res
				.status(404)
				.json({ error: `could not find student with id: ${id}` });
		}
		res.status(200).json({ data: transaction });
	} catch (error) {
		res.status(500).json({ error: error.message });
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
	try {
		const { id } = req.params;
		const transaction = req.body;

		if (!isValidId(id)) {
			return res
				.status(400)
				.json({ error: `the id must be a positive integer, received ${id}` });
		}

		if (!isvalidTransaction(transaction)) {
			return res.status(400).json({
				error: `transaction must only have fields: ${Object.keys(
					TRANSACTION_FIELDS
				).join(", ")}`,
			});
		}
		const updatedTransaction = await updateTransaction(id, req.body);
		if (!updatedTransaction) {
			return res
				.status(404)
				.json({ error: `could not find student with id: ${id}` });
		}
		res.status(200).json({ data: updatedTransaction });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

transactions.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		if (!isValidId(id)) {
			return res
				.status(400)
				.json({ error: `the id must be a positive integer, received ${id}` });
		}
		const deletedTransaction = await deleteTransaction(id);
		if (!deletedTransaction) {
			res.status(404).json({ error: `could not find student with id: ${id}` });
		}
		res.status(200).json({ data: deletedTransaction });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = transactions;
