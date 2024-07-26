-- INDEX (BTree data structure)
-- indexes are used to find values within a specific column more quickly
-- MYSQL normally searches sequentially through a column
-- the longer the column, the more expensive the operation is
-- UPDATE takes more time, SELECT takes less time

-- CREATE
-- always have 1 index (search by id)
CREATE INDEX lastname_index ON customers(LAST_NAME);
CREATE INDEX firstname_lastname_index 
ON customers(FIRST_NAME, LAST_NAME);

-- READ
SHOW INDEXES FROM CUSTOMERS;

-- DELETE
DROP INDEX firstname_lastname_index ON CUSTOMERS;
ALTER TABLE CUSTOMERS DROP INDEX lastname_index;

-- SEARCH (time will more faster than normal :))
SELECT * FROM customers WHERE LAST_NAME = "Puff";