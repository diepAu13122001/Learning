def hello():
    print("Hi beaaa!")


# using to check module directly or indirectly
# co phai dang chay o module hien tai khong
if __name__ == "__main__":
    print("running this module directly")
    hello()
else:
    print("running other module indirectly")

# khi run o file nay => if true
# run o file 62_name => if false
