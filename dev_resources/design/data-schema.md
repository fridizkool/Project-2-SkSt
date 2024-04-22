Description of data schema

Tables:

Users table
- Role
- Username
- id autoassigned/hashed
- hashed password

1-1 table users -> tax info
- 
- income
- filing status
- special deductions (consider standard deduction in service layer)
- how much was withheld (federal taxes, ss, medicare)
- \# of dependents
- student status
- self employed income (net)

- Note- self employed income contributes to income tax bracket, and is also subject to the ~15% self employment tax which is the contribution to SS/Medicare

Static tax brackets Json or something to be used only in memory- not stored in database