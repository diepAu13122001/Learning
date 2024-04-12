def a(abc):
    global f
    f = 10
    print("hello", abc)


a("haha")
print(f)


def my_sum(a, b, c):
    return a + b + c

# de quy
def sumOfList(n, sum):
    if n < 0:
        return sum
    return sumOfList(n - 1, sum + n)


sum = 0
for i in range(11):
    sum += i

print(sum)
print(sumOfList(10, 0))
