-- COUNT 
SELECT COUNT(AMOUNT) AS "today's transactions" 
FROM TRANSACTIONS;
SELECT COUNT(EMPLOYEE_ID) AS "TOTAL EMPLOYEES" 
FROM EMPLOYEES;

-- MAX
SELECT MAX(AMOUNT) AS "MAXIMUM TRANSACTIONS" 
FROM TRANSACTIONS;

-- MIN 
SELECT * FROM TRANSACTIONS 
WHERE AMOUNT = (SELECT MIN(AMOUNT) AS minimum FROM TRANSACTIONS);

-- AVG
SELECT TRANSACTION_ID, AMOUNT, CUSTOMER_ID, A.AVERAGE 
FROM TRANSACTIONS AS T
JOIN (SELECT AVG(AMOUNT) AS AVERAGE FROM TRANSACTIONS) AS A
ON T.AMOUNT >= A.AVERAGE;

-- SUM
SELECT SUM(AMOUNT) AS SUM FROM transactions;
-- sum of transactions of each customers
select concat(c.first_name, " ", c.last_name) as full_name,
t.sum as "transaction amount"
from customers as c 
join (
	select CUSTOMER_ID, sum(amount) as sum 
    from transactions
	where customer_id is not null
	group by CUSTOMER_ID
) as t
on c.CUSTOMER_ID = t.CUSTOMER_ID;


-- CONCAT
SELECT CONCAT(FIRST_NAME, " ", LAST_NAME) AS FULL_NAME
FROM employees;


