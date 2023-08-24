class Car:
    color = None

class Motorcycle:
    color = None

def change_color(vehicle, color):
    vehicle.color = color


car_1 = Car()
print(car_1.color)
change_color(car_1, "red")
print(car_1.color)

car_2 = Car()
print(car_2.color)
change_color(car_2, "white")
print(car_2.color)

car_3 = Car()
print(car_3.color)
change_color(car_3, "blue")
print(car_3.color)

bike_1 = Motorcycle()
print(bike_1.color)
change_color(bike_1, "pink")
print(bike_1.color)