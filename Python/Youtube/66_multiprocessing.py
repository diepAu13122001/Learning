# multiprocessing = running tasks in parallel in different cpu cores, bypasses GIL used for threading
# multiprocessing: better for cpu bound tasks (heavy cpu usage)
# multithreading: better for io bound tasks (waiting around)

from multiprocessing import Process, cpu_count
import time


def counter(num):
    count = 0
    while count < num:
        count += 1


def main():
    # in ra so core trong cpu (16 core)
    print(cpu_count())

    # neu su dung > 16 process => doi lau hon vi het core de dung => cai cu destroy moi den cai moi
    # neu nam trong 16 process => thoi gian su ly nhanh hon binh thuong
    a1 = Process(target=counter, args=(125000000,))
    a2 = Process(target=counter, args=(125000000,))
    a3 = Process(target=counter, args=(125000000,))
    a4 = Process(target=counter, args=(125000000,))
    a5 = Process(target=counter, args=(125000000,))
    a6 = Process(target=counter, args=(125000000,))
    a7 = Process(target=counter, args=(125000000,))
    a8 = Process(target=counter, args=(125000000,))
    a9 = Process(target=counter, args=(125000000,))
    a10 = Process(target=counter, args=(125000000,))
    a11 = Process(target=counter, args=(125000000,))
    a12 = Process(target=counter, args=(125000000,))
    a13 = Process(target=counter, args=(125000000,))
    a14 = Process(target=counter, args=(125000000,))
    a15 = Process(target=counter, args=(125000000,))
    a16 = Process(target=counter, args=(125000000,))
    # more than 16 cores in cpu
    a17 = Process(target=counter, args=(125000000,))
    a18 = Process(target=counter, args=(125000000,))
    a19 = Process(target=counter, args=(125000000,))
    a20 = Process(target=counter, args=(125000000,))

    a1.start()
    a2.start()
    a3.start()
    a4.start()
    a5.start()
    a6.start()
    a7.start()
    a8.start()
    a9.start()
    a10.start()
    a11.start()
    a12.start()
    a13.start()
    a14.start()
    a15.start()
    a16.start()

    a17.start()
    a18.start()
    a19.start()
    a20.start()

    a1.join()
    a2.join()
    a3.join()
    a4.join()
    a5.join()
    a6.join()
    a7.join()
    a8.join()
    a9.join()
    a10.join()
    a11.join()
    a12.join()
    a13.join()
    a14.join()
    a15.join()
    a16.join()

    a17.join()
    a18.join()
    a19.join()
    a20.join()

    print("Finish!", time.perf_counter() / 1000, "secs")
    # 14.2 sec/ process (16 processes)
    # 14.8 sec/ process (over 16 processes)


if __name__ == "__main__":
    main()
