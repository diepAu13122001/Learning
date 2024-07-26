-- LIMIT clause is used to limit number of records
-- => use for displaying a large data on pages (pagination)
SELECT * FROM CUSTOMERS
order by LAST_NAME DESC LIMIT 3;

-- LIMIT: <page number> , <how many row in a page?>
SELECT * FROM CUSTOMERS LIMIT 0, 2;