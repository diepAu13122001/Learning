# slicing = create a substring by extracting elements from another string
#           indexing[] or slice()
#           [start:stop:end]

# ---------------- Indexing ----------------------
name = "Diep Au"
first_name  = name[name.find("D"):4]
# first_name = name[:4] -> if slice from first char -> don't need to write
print(first_name)
last_name = name[5:] #can remove end value if it is end char index in string
print(last_name)

funky_name = name[0:7:3] # get every third char in string
# funky_name = name[::3] # same first way
print(funky_name)

reversed_name = name[::-1]
print(reversed_name)

# ---------------- Slice -----------------------------
website1 = "http://google.com"
website2 = "http://wikipedia.com"

slice_website_name = slice(7, -4) # end uses negative index -> m is -2 --> .com is -4
website_name1 = website1[slice_website_name]
website_name2 = website2[slice_website_name]
print(website_name1)
print(website_name2)