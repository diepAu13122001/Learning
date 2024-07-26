-- views 
-- a virtual table based on the result-set of an SQL statement
-- The fields in a view are fields on or more real tables in the db
-- They're not real tables, but can be interacted with as if they were
-- update together with the used tables

-- CREATE
CREATE VIEW employee_attendance AS
SELECT FIRST_NAME, LAST_NAME
FROM EMPLOYEES;

CREATE VIEW CUSTOMER_EMAILS AS
SELECT EMAIL FROM CUSTOMERS;

-- insert data after create view
insert into customers
values (6, "Pearl", "Krabs", null, "PKrabs@gmail.com");

-- READ
-- click on views tag (left slidebar)
SELECT * FROM employee_attendance;
SELECT * FROM CUSTOMER_EMAILS;

-- DELETE
DROP VIEW employee_attendance;
DROP VIEW CUSTOMER_EMAILS;

