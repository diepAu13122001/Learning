-- prepare data
INSERT INTO TRANSACTIONS (AMOUNT) VALUES (1.00);

INSERT INTO CUSTOMERS (FIRST_NAME, LAST_NAME)
VALUES ("Poppy", "Puff");

-- INNER JOIN: 2 tables have that data
-- arr1 = {1,2,3}; arr2 = {3,4,5}
-- => inner join: {3}
SELECT transaction_id, amount, first_name, last_name
FROM TRANSACTIONS INNER JOIN CUSTOMERS
ON transactions.CUSTOMER_ID = customers.CUSTOMER_ID
ORDER BY transaction_id asc;

-- LEFT JOIN: all of left table
-- arr1 = {1,2,3,7}; arr2 = {3,4,5}
-- => left join: {1,2,3,7}
SELECT transaction_id, amount, first_name, last_name
FROM TRANSACTIONS LEFT JOIN CUSTOMERS
ON transactions.CUSTOMER_ID = customers.CUSTOMER_ID;
-- almost show data without customer id in transactions

-- RIGHT JOIN: all of left table
-- arr1 = {1,2,3,7}; arr2 = {3,4,5}
-- => left join: {3,4,5}
SELECT customers.customer_id, amount, first_name, last_name
FROM TRANSACTIONS RIGHT JOIN CUSTOMERS
ON transactions.CUSTOMER_ID = customers.CUSTOMER_ID;
-- almost show data without transaction

-- SELF JOIN: table join with the copy of that table
-- ex: children had mom (many to one)
-- add column in customers
ALTER TABLE customers ADD COLUMN REFERRAL_ID INT;
-- update data
UPDATE CUSTOMERS SET REFERRAL_ID = 1 WHERE CUSTOMER_ID = 2;
UPDATE CUSTOMERS SET REFERRAL_ID = 2 WHERE CUSTOMER_ID = 3;
UPDATE CUSTOMERS SET REFERRAL_ID = 2 WHERE CUSTOMER_ID = 4;
-- select + self join
SELECT A.customer_id, 
concat(A.FIRST_NAME," ", A.LAST_NAME) AS CUSOMER_NAME,
concat(B.FIRST_NAME," ", B.LAST_NAME) AS REFERRAL_BY
FROM customers AS A INNER JOIN customers AS B
ON A.REFERRAL_ID = B.CUSTOMER_ID;

-- employees self join
-- add data
alter table employees add column supervisor_id int;
update employees
set supervisor_id = 5 where employee_id in(2,3,4,6,7);
update employees
set supervisor_id = 1 where employee_id = 4;
-- select + join
SELECT A.employee_id, 
concat(A.FIRST_NAME," ", A.LAST_NAME) AS employee_name,
concat(B.FIRST_NAME," ", B.LAST_NAME) AS "reports to"
FROM employees AS A INNER JOIN employees AS B
ON A.supervisor_id = B.employee_id;