class Animal:

    alive = True

    def __init__(self) -> None:
        pass

    def eat(self):
        print("The animal is eating!")

    def sleep(self):
        print("The animal is sleeping!")


class Rabbit(Animal):
    def run(self):
        print("The rabbit is running!")


class Fish(Animal):
    def swim(self):
        print("The fish is swimming!")


class Hawk(Animal):
    def fly(self):
        print("The hawk is flying!")
