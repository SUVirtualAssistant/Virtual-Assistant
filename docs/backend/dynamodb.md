# DynamoDB
DynamoDB is used to manage Mercury's database tables. These tables are used to 
store data this is frequently referenced and standardized. This includes Calendar and Faculty Directory information. 

#Accessing from Labda
In order to access the data in dynamoDB tables, a lambda needs to have the 'VADatabaseAccess' role, 
which grants it the ability to poll a select set of database tables. When creating a new database table, 
the new table needs to be added to the DynamoDB permissions of the access role. 

#FacultyDirectory table
- Structure: Email, Fname, Address, Aff, Department, Hid, JTitle, LName, Phone
- Contents: Su Faculty and staff member data
- Notes: Inconsistency between "Fname" and "LName" naming convention is intentional. The data 
is stored in a database that uses this naming scheme. We decided to stick with this to make 
data imports simpler in the future. 

#Calendar table
- structure: ID, EVENT_LOCATION, EVENT_START_DATE, EVENT_START_TIME, EVENT_SUMMARY
- contents: SU calendar data pulled from ICAL streams (https://calendar.seattleu.edu/)

#FAQ table
- structure: Question, Answer
- contents: ITS FAQ data

