DROP DATABASE IF EXISTS bread;
CREATE DATABASE bread;

\c bread;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    transaction_date DATE NOT NULL,
    transaction_name TEXT NOT NULL,
    transaction_type TEXT NOT NULL, 
    transaction_amount DECIMAL NOT NULL,
    vendor TEXT NOT NULL
);