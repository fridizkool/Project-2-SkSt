Description of data schema

Tables:

Users table
- Role
- Username
- id autoassigned/hashed (primary key for this table and foreign key to tax info tables)
- hashed password

1-1 table users -> tax info
- id (primary key & foreign key)
- income (from a w2 job)
- filing status
- special deductions (consider standard deduction in service layer)
- how much was withheld (federal taxes, ss, medicare)
- \# of dependents
- student status
- self employed income (net)



Static tax brackets Json or something to be used only in memory- not stored in database

## Calculation notes



## Example

Say a user A inputs the following