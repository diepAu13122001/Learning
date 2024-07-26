-- CRUD database ----------------------------------------
-- CREATE 
CREATE DATABASE myDB;
-- right mouse button => set as default sechma = "use MyDB" 
USE myDB; 
-- UPDATE
ALTER DATABASE myDB READ ONLY = 0;
-- ma hoa bang du lieu => khong the chinh sua, them table
ALTER DATABASE MYDB encryption = 'Y'; 
-- change update mode
SET SQL_SAFE_UPDATES = 0; -- can delete all data, create table without primary key
-- DELETE
DROP DATABASE MYDB;

