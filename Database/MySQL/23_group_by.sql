-- group by:  aggregate all rows by a specific column 
--            often used with aggregate functions
--            ex. sum(), max(), min(), avg(), count()

DROP TABLE IF EXISTS transactions;
CREATE TABLE transactions (
    transaction_id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(5, 2),
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) 
    REFERENCES customers(customer_id)
);

INSERT INTO transactions
VALUES  (1000, 4.99, 3, "2023-01-01"),
  (1001, 2.89, 2, "2023-01-01"),
  (1002, 3.38, 3, "2023-01-02"),
  (1003, 4.99, 1, "2023-01-02"),
  (1004, 1.00, NULL, "2023-01-03"),
  (1005, 2.49, 4, "2023-01-03"),
  (1006, 5.48, NULL, "2023-01-03");
        
SELECT * FROM transactions;


-- sum
SELECT SUM(AMOUNT), ORDER_DATE FROM TRANSACTIONS
group by ORDER_DATE;

-- max: by each date
SELECT max(AMOUNT), ORDER_DATE FROM TRANSACTIONS
group by ORDER_DATE;

-- min: by each date
SELECT min(AMOUNT), ORDER_DATE FROM TRANSACTIONS
group by ORDER_DATE;

-- count: count customer > 1 and not null
SELECT count(AMOUNT), customer_id FROM TRANSACTIONS
group by customer_id
having count(amount) > 1 and customer_id is not null;
