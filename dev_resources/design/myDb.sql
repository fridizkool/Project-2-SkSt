CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password_hash CHAR(64) NOT NULL
);

CREATE TABLE tax_info (
    user_id SERIAL PRIMARY KEY,
    income NUMERIC(15, 2) NOT NULL,
    self_employed_income NUMERIC(15, 2),
    filing_status VARCHAR(50) NOT NULL,
    withheld_federal NUMERIC(15, 2),
    withheld_ss NUMERIC(15, 2),
    withheld_medicare NUMERIC(15, 2),
    dependents INTEGER,
    student_status BOOLEAN,
    special_deductions NUMERIC(15, 2),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- Insert dummy data into users table
INSERT INTO users (role, username, password_hash) VALUES
    ('Admin', 'admin1', 'password1'),
    ('User', 'user1', 'password2'),
    ('User', 'user2', 'password3'),
    ('User', 'user3', 'password4'),
    ('User', 'user4', 'password5');
    
-- Insert dummy data into tax_info table
INSERT INTO tax_info (user_id, income, filing_status, special_deductions, withheld_federal, withheld_ss, withheld_medicare, dependents, student_status, self_employed_income) VALUES
    (1, 50000.00, 'Single', 0.00, 5000.00, 1000.00, 200.00, 1, FALSE, 0.00),
    (2, 60000.00, 'Single', 0.00, 6000.00, 1200.00, 240.00, 2, TRUE, 0.00),
    (3, 70000.00, 'Married', 2000.00, 7000.00, 1400.00, 280.00, 3, FALSE, 1000.00),
    (4, 80000.00, 'Married', 3000.00, 8000.00, 1600.00, 320.00, 0, TRUE, 2000.00),
    (5, 90000.00, 'Head of Household', 4000.00, 9000.00, 1800.00, 360.00, 1, FALSE, 3000.00);
