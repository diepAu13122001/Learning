-- ROWS ---
-- insert 1 row
INSERT INTO EMPLOYEES VALUES (1, "Eugene", "Krabs", 25.50, "2023-01-02");
-- insert many rows
INSERT INTO EMPLOYEES 
VALUES (2, "Squidward", "Tentacles", 15.00, "2023-01-03"),
		(3, "Spongebob", "Squarepants", 12.50, "2023-05-02"),
		(4, "Patrick", "Star", 12.50, "2023-09-04"),
		(5, "Sandy", "Cheeks", 17.25, "2023-12-31");
-- insert row with null values
INSERT INTO EMPLOYEES (employee_id, first_name, last_name)
VALUES (6, "Sheldon", "Plankton");
INSERT INTO EMPLOYEES
VALUES (7, "Vande", null, 19.75, "2024-01-01");
-- update data 
UPDATE EMPLOYEES SET HOURLY_PAY = 10.25 WHERE EMPLOYEE_ID = 6;
UPDATE EMPLOYEES SET HIRE_DATE = "2024-01-10" WHERE EMPLOYEE_ID = 6;
UPDATE EMPLOYEES SET LAST_NAME = "Nguyen", hourly_pay = 10.00 
WHERE EMPLOYEE_ID = 7; -- without where => update all rows
-- delete data
DELETE FROM EMPLOYEES WHERE EMPLOYEE_ID = 6;
DELETE FROM EMPLOYEES; -- remove all data in the table
