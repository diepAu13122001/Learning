# super() = function used to give access to the methods of a parent class.
#           returns a temporary object of a parent class when used.
class Rectangle:
    # cause all children class need it -> call super will be faster
    def __init__(self, length, width):
        self.length = length
        self.width = width


class Square(Rectangle):
    def __init__(self, length, width):
        super().__init__(length, width)

    def area(self):
        return self.length * self.width


class Cube(Rectangle):
    def __init__(self, length, width, height):
        super().__init__(length, width)
        self.height = height

    def volume(self):
        return self.length * self.width * self.height


square = Square(3, 3)
cube = Cube(3, 3, 3)

print("Square area: " + str(square.area()))
print("Cube volume: " + str(cube.volume()))
