CREATE TABLE PRODUCTS(
	PRODUCT_ID int PRIMARY KEY,
    PRODUCT_NAME varchar(25),
    PRICE decimal(4,2)
);

-- UNIQUE, NOT NULL ---
ALTER TABLE PRODUCTS ADD CONSTRAINT unique(PRODUCT_NAME);
ALTER TABLE PRODUCTS MODIFY PRICE decimal(4,2) NOT NULL;

INSERT INTO PRODUCTS 
VALUES (100, "hamburger", 3.99),
		(101, "fries", 1.89),
		(102, "soda", 1.00),
        (103, "ice cream", 1.49);
        
-- INSERT INTO PRODUCTS VALUES (104, "fries", 12.6); -- fries is unique
-- INSERT INTO PRODUCTS VALUES (105, "abc", null); -- price is not null => 0

SELECT * FROM PRODUCTS;

-- CHECK CONSTRAINT ---
CREATE TABLE ABC (
	ID INT PRIMARY KEY,
    NUM INT,
    CONSTRAINT chk_min_number CHECK (NUM >= 10) 
);

ALTER TABLE ABC 
ADD CONSTRAINT chk_max_number CHECK (NUM <= 100);

INSERT INTO ABC VALUES (1, 101); -- violate constraint
INSERT INTO ABC VALUES (2, 1); -- violate constraint

ALTER TABLE ABC DROP CHECK chk_max_number;
ALTER TABLE ABC DROP CHECK chk_min_number;

DROP TABLE ABC;

-- DEFAULT CONSTRAINT ---
CREATE TABLE PRODUCTS(
	PRODUCT_ID int PRIMARY KEY,
    PRODUCT_NAME varchar(25),
    PRICE decimal(4,2) DEFAULT 0
);

ALTER TABLE PRODUCTS ALTER PRICE SET DEFAULT 0;

-- insert without value -> default value will be 0.00 / NOT IS NULL
INSERT INTO PRODUCTS (PRODUCT_ID, PRODUCT_NAME)
VALUES (104, "straw"),
		(105, "napkin"),
        (106, "fork"),
        (107, "spoon");
        
SELECT * FROM products;

-- ATER TABLE ABC ALTER MY_DATETIME SET DEFAULT NOW();

