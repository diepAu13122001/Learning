class Animal:
    def eat(self):
        # print("This animal is eating")
        pass


class Rabbit(Animal):
    def eat(self):
        print("This rabbit is eating a carrot")


rabbit = Rabbit()
rabbit.eat()
