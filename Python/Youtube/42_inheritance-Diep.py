# Tinh ke thua: parents -> children 
from materials.animal import Animal, Rabbit, Fish, Hawk

rabbit1 = Rabbit()
fish1 = Fish()
hawk1 = Hawk()

#Inheritance
print(rabbit1.alive)
fish1.eat()
hawk1.sleep()

rabbit1.run()
fish1.swim()
hawk1.fly()