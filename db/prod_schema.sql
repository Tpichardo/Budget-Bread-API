DROP DATABASE IF EXISTS bread_db_mimj;
CREATE DATABASE bread_db_mimj;

\c bread_db_mimj;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    current_user_id TEXT NOT NULL,
    transaction_date DATE NOT NULL,
    transaction_name TEXT NOT NULL,
    transaction_type TEXT NOT NULL, 
    transaction_amount NUMERIC NOT NULL,
    transaction_vendor TEXT NOT NULL
);