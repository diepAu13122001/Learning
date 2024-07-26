-- select all employees whose hourly_pay > avg
select concat(FIRST_NAME, " ", LAST_NAME) as FULL_NAME,
JOB, HOURLY_PAY FROM EMPLOYEES 
JOIN (SELECT AVG(HOURLY_PAY) as average FROM EMPLOYEES) as A
ON EMPLOYEES.HOURLY_PAY >= A.average;

-- select customers didn't have any transaction
select concat(FIRST_NAME, " ", LAST_NAME) as FULL_NAME
FROM CUSTOMERS
WHERE CUSTOMER_ID NOT IN (
	SELECT DISTINCT CUSTOMER_ID 
    FROM TRANSACTIONS 
    WHERE CUSTOMER_ID IS NOT NULL
);