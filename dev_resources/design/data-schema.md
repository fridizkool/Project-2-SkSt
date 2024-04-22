Description of data schema

Tables:

Users table
- Role
- Username
- id autoassigned/hashed
- hashed password
- foreign keys



W2 table

1099 table

1-1 table users -> tax info
- income
- filing status
- special deductions (consider standard deduction in service layer)
- how much was withheld (federal taxes, ss, medicare)
- \# of dependents
- student status

Static tax brackets Json or something to be used only in memory- not stored in database