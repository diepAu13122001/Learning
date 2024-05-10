# dictionary comprehension = create dictionaries using an expression
#  can replace for loops and certain lambda function
# dictionary = {key: expression for (key, value) in iterable}
cities_in_F = {"New York": 32, "Boston": 75, "Los Angles": 100, "Chicago": 50}
# cities_in_C = {key: (round((value-32)*(5/9))) for (key, value) in cities_in_F.items()}
cities_in_C = {item: (round((cities_in_F.get(item)-32)*(5/9))) for item in cities_in_F}
print(cities_in_C)

# dictionary = {key: expression for (key, value) in iterable if conditional}
weather = {"New York": "snowing", "Boston": "sunny", "Los Angles": "sunny", "Chicago": "snowing"}
sunny_weather = {key: value for (key, value) in weather.items() if value == "sunny"}
print(sunny_weather)

# dictionary = {key: if/else for (key, value) in iterable}
cities = {"New York": 32, "Boston": 75, "Los Angles": 100, "Chicago": 50}
cities_weather = {key: "WARM" if value >= 40 else "COLD" for (key, value) in cities.items()}
print(cities_weather)

# dictionary = {key: function(value) for (key, value) in iterable}
cities = {"New York": 32, "Boston": 75, "Los Angles": 100, "Chicago": 50}
def check_temp(value):
    if value > 70:
        return 'HOT'
    elif 69 >= value > 40:
        return 'WARM'
    else:
        return 'COLD'

desc_cities = {key: check_temp(value) for (key, value) in cities.items()}
print(desc_cities)