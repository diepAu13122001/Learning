-- TRANSACTION
SET AUTOCOMMIT = OFF; -- transaction not auto save after run codes
COMMIT; -- manual way to save last transaction

delete FROM EMPLOYEES;
SELECT * FROM EMPLOYEE;

ROLLBACK; -- commit 1 -> do smth -> rollback (-> commit 1) / commit 2
-- set autocommit off -> delete rows -> rollback (rows was here)
-- set autocommit on -> auto has new transaction -> can't rollback
-- set autocommit off -> delete rows -> commit -> can't rollback

SELECT * FROM EMPLOYEE; -- khoi phuc lai du lieu ban dau