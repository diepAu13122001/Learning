-- stored procedure = is prepared SQL code that you can save
--    greate if there's a query that you write often

-- DELTIMITER $$ or //: sign to become a procedure 
-- cause MySQL can't know sub code in begin - end

-- CREATE 
DELIMITER $$
CREATE procedure GET_CUSTOMERS()
BEGIN
	SELECT * FROM CUSTOMERS;
END $$
DELIMITER ;

-- CALL
CALL GET_CUSTOMERS();

-- DELETE
DROP PROCEDURE GET_CUSTOMERS;

-- EX ----------------------------------------
-- FUNCTION: FIND_CUSTOMER BY ID 
DELIMITER //
CREATE procedure FIND_CUSTOMER(IN ID INT)
BEGIN
	SELECT * FROM CUSTOMERS
    WHERE customer_ID = ID;
END //
DELIMITER ;

CALL FIND_CUSTOMER(3);
DROP procedure FIND_CUSTOMER;

-- FUNCTION: FIND_CUSTOMER BY FIRST_NAME AND LAST_NAME
DELIMITER $$
CREATE procedure FIND_CUSTOMER(IN f_name varchar(50),
								IN l_name varchar(50))
BEGIN
	SELECT * FROM CUSTOMERS
    WHERE first_name like f_name 
		and last_name like l_name;
END $$
DELIMITER ;

CALL FIND_CUSTOMER("S%", "%a%");
DROP procedure FIND_CUSTOMER;
