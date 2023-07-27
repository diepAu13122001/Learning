#type casting = convert the data type of a value to another data type
x = 1 # int
y = 2.0 # float
z = "3 \n" # str

print(type(x))
print(type(y))
print(type(z))
print(z*3)

# ---------- convert data --------------------
y = int(y) # float -> int
z = int(z) # string -> int
print(type(y))
print(type(z))
print(z*3)

x = float(x) # int -> float
z = float(z) # string -> float
print(type(x))
print(type(z))
print(z*3)

x = str(x) # int -> string
y = str(y) # float -> string
print(type(x))
print(x*3)
print(type(y))
print(y*3)