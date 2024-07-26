-- READ TABLE DATA
-- select all
SELECT * FROM EMPLOYEES; 
-- select specific columns
SELECT last_name, first_name FROM EMPLOYEES;
-- select with conditions
SELECT * FROM EMPLOYEES WHERE FIRST_NAME = "Spongobob";
SELECT * FROM EMPLOYEES WHERE HOURLY_PAY > 12.60;
SELECT * FROM EMPLOYEES WHERE HIRE_DATE <=  "2023-06-30";
SELECT * FROM EMPLOYEES WHERE EMPLOYEE_ID != 1;
SELECT * FROM EMPLOYEES WHERE HIRE_DATE IS NOT NULL;
