CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    role VARCHAR(50) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    initial VARCHAR(1),
    suffix VARCHAR(50),
    address VARCHAR(50),
    telephone_number VARCHAR(50),
    social_security VARCHAR(12),
    username VARCHAR(255) NOT NULL,
    password VARCHAR(64) NOT NULL
);


CREATE TABLE tax_info_w2 (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    employer_id_b INTEGER,    --employer boxes
    employer_information_c VARCHAR(1023),
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
);

CREATE TABLE tax_info_1099 (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    payer_information VARCHAR(1023),
    payer_tin VARCHAR(12),
    recipient_tin VARCHAR(12),
    recipient_name VARCHAR(50),
    recipient_address VARCHAR(50),
    recipient_location VARCHAR(255),
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
    additional_withholdings NUMERIC(15, 2),
    filing_status VARCHAR(50) NOT NULL,
    dependents INTEGER,
    student_status BOOLEAN,
    standard_deduction BOOLEAN,
    special_deductions NUMERIC(15, 2),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- For User table, send a POST to the /auth/register/user endpoint or use the in app page to make users.
