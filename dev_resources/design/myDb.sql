CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    initial VARCHAR(1),
    suffix VARCHAR(50),
    address VARCHAR(50),
    telephone_number VARCHAR(50),
    social_security INTEGER,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(64) NOT NULL
);


CREATE TABLE tax_info_w2 (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    employer_id_b INTEGER,    --employer boxes
    employer_infomation_c VARCHAR(1023),
    control_number_d INTEGER, --box d
    income_1 NUMERIC(15, 2) NOT NULL, --box 1
    withheld_federal_2 NUMERIC(15, 2),    --box 2
    social_security_3 NUMERIC(15, 2), --box 3
    withheld_ss_4 NUMERIC(15, 2), --box 4
    medicare_5 NUMERIC(15, 2),    --box 5
    withheld_medicare_6 NUMERIC(15, 2),   --box 6
    social_security_tips_7 NUMERIC(15, 2),    --box 7
    allocated_tips_8 NUMERIC(15, 2),  --box 8
    dependent_care_10 NUMERIC(15, 2), --box 10
    nonqualified_plan_11 VARCHAR(50), --box 11
    deferrals_12 VARCHAR(50), --box 12 (csv)
    statutory_13 BOOLEAN,
    retirement_13 BOOLEAN,
    sick_pay_13 BOOLEAN,
    other_14 VARCHAR(1023),
    FOREIGN KEY (user_id) REFERENCES users (id)
    -- FOREIGN KEY (employer_id) REFERENCES employer (id)
);

CREATE TABLE tax_info_1099 (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    payer_information VARCHAR(1023),
    payer_tin INTEGER,
    account_number INTEGER,
    rents_1 NUMERIC(15, 2),
    royalties_2 NUMERIC(15, 2),
    other_income_3 NUMERIC(15, 2),
    withheld_federal_4 NUMERIC(15, 2),
    fishing_boat_5 NUMERIC(15, 2),
    healthcare_6 NUMERIC(15, 2),
    over_5000_7 BOOLEAN,
    substitute_8 NUMERIC(15, 2),
    crop_insurance_9 NUMERIC(15, 2),
    attorney_10 NUMERIC(15, 2),
    fish_purchased_11 NUMERIC(15, 2),
    deferrals_12 NUMERIC(15, 2),
    fatca_13 BOOLEAN,
    golden_parachute_14 NUMERIC(15, 2),
    nonqualified_deferrals_15 NUMERIC(15, 2)
);

CREATE TABLE tax_info (
    user_id INTEGER PRIMARY KEY,
    supplemental_income NUMERIC(15, 2),
    filing_status VARCHAR(50) NOT NULL,
    dependents INTEGER,
    student_status BOOLEAN,
    special_deductions NUMERIC(15, 2),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- For User table, send a POST to the /auth/register/user endpoint or use the in app page to make users.

-- Insert dummy data into tax_info table
-- INSERT INTO tax_info (user_id, income, filing_status, special_deductions, withheld_federal, withheld_ss, withheld_medicare, dependents, student_status, self_employed_income) VALUES
--     (1, 50000.00, 'Single', 0.00, 5000.00, 1000.00, 200.00, 1, FALSE, 0.00),
--     (2, 60000.00, 'Single', 0.00, 6000.00, 1200.00, 240.00, 2, TRUE, 0.00),
--     (3, 70000.00, 'Married', 2000.00, 7000.00, 1400.00, 280.00, 3, FALSE, 1000.00),
--     (4, 80000.00, 'Married', 3000.00, 8000.00, 1600.00, 320.00, 0, TRUE, 2000.00),
--     (5, 90000.00, 'Head of Household', 4000.00, 9000.00, 1800.00, 360.00, 1, FALSE, 3000.00);
