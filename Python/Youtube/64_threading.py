#  thread = a flow of execution. Like a separate order of instructions.
#           however each thread takes a turn running achieve concurrency
#           GIL = global interpreter lock,
#           allow only one thread to hold the control of Python interpreter (thong dich vien :))
#           at any one time

# CPU bound: program/ task spends most of it's time waiting for internal events (CPU intensive)
#           use multiprocessing

# io bound: program/ task spends most of it's time waiting for external events (user input, web scrapping)
#           use multithreading

import threading
import time


def eat_breakfast():
    time.sleep(3)
    print("You ate breakfast")


def drink_coffee():
    time.sleep(4)
    print("You drank coffee")


def study():
    time.sleep(5)
    print("You finished studying")


# eat_breakfast()  # after 3s
# drink_coffee()  # after 4s + 3s
# study()  # after 5s + 4s + 3s

# Lam cung nhau tren nhieu thread (parallel: song song)
x = threading.Thread(target=eat_breakfast, args=())
x.start()  # start at sec 3

y = threading.Thread(target=drink_coffee, args=())
y.start()  # start at sec 4

z = threading.Thread(target=study, args=())
z.start()  # start at sec 5

# print(threading.active_count())  # 4 (3 func + 1 main)


# run before the functions because they need to sleep => use join to hold below codes waiting
x.join()
y.join()
z.join()


print(threading.active_count())  # 1 main
print(threading.enumerate())  # time to start this thread
print(time.perf_counter())  # performance counter (time to run code)
