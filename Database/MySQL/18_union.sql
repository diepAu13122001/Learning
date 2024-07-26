-- UNION: combies the results of 2 or more select statements
SELECT FIRST_NAME, LAST_NAME FROM employees
union 
SELECT FIRST_NAME, LAST_NAME FROM CUSTOMERS;

-- UNION ALL: show duplicate values in 2 tables
insert into customers values (5, "Sheldon", "Plankton", null);
SELECT FIRST_NAME, LAST_NAME FROM employees
union all
SELECT FIRST_NAME, LAST_NAME FROM CUSTOMERS
order by FIRST_NAME, LAST_NAME;