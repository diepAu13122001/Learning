-- AUTO INCREMENT
-- use for primary key => auto create id when create row
DROP TABLE TRANSACTIONS;
CREATE TABLE TRANSACTIONS (
	TRANSACTION_ID int PRIMARY KEY auto_increment,
    AMOUNT decimal(5,2)
);

-- id will start by 100 
ALTER TABLE TRANSACTIONS AUTO_INCREMENT = 100;

INSERT INTO TRANSACTIONS (AMOUNT)
VALUES (12.5),
		(10.5),
        (8.25),
        (2.19),
        (14.3),
        (3.11),
        (9.00);
        
SELECT * FROM TRANSACTIONS;