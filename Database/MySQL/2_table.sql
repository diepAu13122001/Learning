-- CRUD tables ----------------------------------------
-- CREATE
CREATE TABLE EMPLOYEES (
	EMPLOYEE_ID int PRIMARY KEY,
    FIRST_NAME varchar(50),
    LAST_NAME varchar(50),
    HOURLY_PAY decimal(5,2),
    HIRE_DATE date
);

-- UPDATE 
-- change table name
RENAME TABLE EMPLOYEES TO WORKERS;

-- DELETE
DROP TABLE EMPLOYEES;