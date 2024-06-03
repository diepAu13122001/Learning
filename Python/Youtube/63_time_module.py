import time

print(time.ctime(0))  # show epoch time ( 1/1/1970)
# convert a time expressed in seconds since epoch to a reachable string
print(time.ctime(100000))  # show epoch time ( 2/1/1970)

print(time.time())  # return current seconds since epoch
print(time.ctime(time.time()))  # return string about time of now

time_obj = time.localtime()
print(time_obj)  # return a list with year, month, date, day, hour, ...)

# format lai time object => return string
local_time = time.strftime(
    "%B %d %Y %H:%M:%S", time_obj
)  # xem them cac ky tu tren web python
print(local_time)

# chuyen tu string => time object
time_string = "20 April, 2024"
time_object = time.strptime(time_string, "%d %B, %Y")
print(time_object)

# (year, mon, day, h, min, sec, #day of week, #day of year, dst)
time_tuple = (2024, 6, 3, 10, 10, 10, 0, 0, 0)
time_str = time.asctime(time_tuple)
print(time_str) # return string by tuple 

time_str2 = time.mktime(time_tuple)
print(time_str2) # return seconds (number) (tinh tu epoch time)

