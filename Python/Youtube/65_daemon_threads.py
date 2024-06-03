#  daemon_threads = a thread that runs in the background, not important for program to run
#                   your program will not wait for daemon threads to complete before exiting
#                   non-daemon threads cannot normally be killed, stay alive until task is complete

#                   ex. background tasks, garbage collection, waiting for input, long running processes
# daemon run cho toi khi non-daemon killed => moi killed

import threading
import time

def timer():
    print()
    count = 0
    while True:
        count += 1
        time.sleep(1)
        print("Logged in for:", count, " sec")


# x = threading.Thread(target=timer)
# x.start()  # khi run, ham timer() chay truoc => khong doi phan answer 
# => chuyen sang daemon de su dung duoc phan input
x = threading.Thread(target=timer, daemon=True)
# x.setDaemon(True)
x.start()
print(x.isDaemon())

# khi nhap input => input died => ham timer se dung lai
answer = input("Do you wish to exit?")
