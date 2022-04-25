DROP DATABASE IF EXISTS dfd1pjbkvsrug9;
CREATE DATABASE dfd1pjbkvsrug9;

\c dfd1pjbkvsrug9;

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    current_user_id TEXT NOT NULL,
    transaction_date DATE NOT NULL,
    transaction_name TEXT NOT NULL,
    transaction_type TEXT NOT NULL, 
    transaction_amount NUMERIC NOT NULL,
    transaction_vendor TEXT NOT NULL
);