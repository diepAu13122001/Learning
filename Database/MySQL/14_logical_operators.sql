-- AND
SELECT * FROM employees
WHERE JOB = "COOK" AND HIRE_DATE < "2024-01-01";

-- OR
SELECT * FROM employees
WHERE JOB = "COOK" OR JOB = "CASHIER";

-- NOT
SELECT * FROM employees
WHERE NOT JOB = "MANAGER" AND NOT JOB = "asst. manager";

-- BETWEEN - AND
SELECT * FROM employees
WHERE HIRE_DATE between "2024-01-01" AND "2024-12-31";

-- IN
SELECT * FROM employees
WHERE JOB IN ("MANAGER", "asst. manager");