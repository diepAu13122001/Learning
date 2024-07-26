-- current_date(), current_time()
CREATE TABLE TEST (
	MY_DATE date,
    MY_TIME time, 
    MY_DATETIME datetime
);
INSERT INTO TEST 
VALUES (current_date(), current_time(), now());
INSERT INTO TEST 
VALUES (current_date() - 10, NULL, NULL);

SELECT * FROM TEST;
DROP TABLE TEST;
