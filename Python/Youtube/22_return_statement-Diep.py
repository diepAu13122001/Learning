# return statement = Functions send Python values/ objects back to the caller
#                    These values/ object are known as the function's return value
def sum(list):
    result = 0
    if (len(list) == 0):
        return None
    
    for x in list:
        result += x
    return result


print(sum([]))
print(sum([12, 45, 64, 78, 1, 3, 0]))
