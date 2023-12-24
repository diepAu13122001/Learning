# method chaining = calling multiple methods sequentially
#                   each call performs an action on the same object and returns self
class Car:
    def turn_on(self):
        print("You start the engine")
        return self # return car object to can be call another methods 

    def drive(self):
        print("You drive the car")
        return self

    def brake(self):
        print("You step on the brakes")
        return self

    def turn_off(self):
        print("You turn off the engine")
        return self


car = Car()

# call single method by line
car.turn_on()
car.drive()

# call multi methods by line
car.brake().turn_off()
# add flash(/) to wrap the line
car.turn_on()\
    .drive()\
    .brake()\
    .turn_off()
