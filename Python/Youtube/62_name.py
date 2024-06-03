# Python interpreter sets 'special variables', one of which is '__name__'
# Python will assign the __name__ var a value of '__main__' if it's
# the initial module being run

import module_two as m2

print(__name__)  # '__main__'
print(m2.__name__)  # 'module_two'

# xem o file module_two
m2.hello()