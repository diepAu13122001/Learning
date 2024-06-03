# zip(*iterables) = agregate elements from to or more iterables (list, tuple, set, ...)
#   create a zip object with paired elemnents stored in tuples for each elements
usernames = ["A", "B", "C"]
passwords = ("abc", "123", "...")
login_dates = ["1/1/20", "2/3/24", "4/5/21"]

users = zip(usernames, passwords)  # declare a zip obj
login_dialog = zip(usernames, passwords, login_dates)
print(type(users))  # zip object
# for i in users:
#     print(i)  # a tuple with 2 element: name + password

# cast zip to another iterables (list, dict)
users = dict(users)
login_dialog = list(login_dialog) # more than 2 element => no dict

print(users)
print(login_dialog)

for key, value in users.items():
    print(key, value)
