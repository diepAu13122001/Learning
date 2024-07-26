-- ROLLUP, extension of the GROUP BY clause (= order by + total at the end)
-- produces another row and shows the GRAND TOTAL(super-aggregate value)

-- order date A -> Z + last row: total of sum(amount)
select sum(amount), order_date
from transactions
group by order_date with rollup;

-- order date A -> Z + last row: total of count(amount)
select count(transaction_id), order_date
from transactions
group by order_date with rollup;

-- get orders of each customer + total of count(id)
select count(transaction_id) as "# of orders", customer_id
from transactions
group by customer_id with rollup;


