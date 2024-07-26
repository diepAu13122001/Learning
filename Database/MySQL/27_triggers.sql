-- TRIGGER = when an event happends, do something
--           ex. (INSERT, UPDATE, DELETE)
--           checks data, handles errors, auditing tables
SET SQL_SAFE_UPDATES = 0;

-- ALTER TABLE EMPLOYEES 
-- ADD COLUMN SALARY DECIMAL(10,2) AFTER HOURLY_PAY;

-- add values for salary: hourly_pay * 2080
UPDATE EMPLOYEES
SET SALARY = HOURLY_PAY * 2080;

-- BEFORE -------------------------------------------------
-- UPDATE ---
-- CREATE TRIGGER: when hourly_pay update => update also salary
CREATE TRIGGER before_hourly_pay_update
BEFORE UPDATE ON EMPLOYEES
FOR EACH ROW 
SET NEW.salary = (NEW.HOURLY_PAY * 2080);

UPDATE EMPLOYEES
SET HOURLY_PAY = HOURLY_PAY + 1;
SELECT * FROM EMPLOYEES;

-- INSERT ---
-- add salary value when create new row
CREATE TRIGGER before_hourly_pay_insert
BEFORE INSERT ON EMPLOYEES
FOR EACH ROW
SET NEW.salary = (NEW.hourly_pay * 2080);

INSERT INTO employees
VALUES (8, "Diep", "Au", 10, null,"2024-03-01", "cashier",  5);
SELECT * FROM EMPLOYEES;

-- AFTER ---------------------------------------------------
-- DELETE ---
UPDATE expenses
SET AMOUNT = -(SELECT SUM(SALARY) FROM employees) 
WHERE expense_name = "wages";

-- update wages column when remove employees'row
CREATE TRIGGER after_salary_delete
AFTER DELETE ON EMPLOYEES
FOR EACH ROW 
UPDATE EXPENSES 
SET AMOUNT = (-1 *AMOUNT - OLD.SALARY ) * -1
WHERE EXPENSE_NAME = "WAGES";

DELETE FROM employees WHERE EMPLOYEE_ID = 7;
SELECT * FROM expenses;

-- update wages column when INSERT employees'row
CREATE TRIGGER after_salary_insert
AFTER INSERT ON EMPLOYEES
FOR EACH ROW 
UPDATE EXPENSES 
SET AMOUNT =  (-1 *AMOUNT + NEW.SALARY ) * -1
WHERE EXPENSE_NAME = "WAGES";

INSERT INTO employees
VALUES (7, "Vande", "Nguyen", 12.25, null,"2023-09-01", "janitor",  5);
SELECT * FROM expenses;

-- update wages column when UDATE employees'row
CREATE TRIGGER after_salary_update
AFTER UPDATE ON EMPLOYEES
FOR EACH ROW 
UPDATE EXPENSES 
SET AMOUNT = (-1 *AMOUNT + (NEW.SALARY - OLD.SALARY)) * -1
WHERE EXPENSE_NAME = "WAGES";

UPDATE employees
SET HOURLY_PAY = 100
WHERE employee_ID = 1;
SELECT * FROM expenses;



