# dictionary = a changeable, unordered collection of unique key: value pairs
#              Fast because they use hashing, allow us to access a value quickly
capitals = {'USA': 'Washington DC',
            'India': 'New Delhi',
            'China': 'Beijing',
            'Vietnam': 'Hanoi'}

capitals.update({'Germany': 'Berlin'})
capitals.update({'USA': 'Las Vegas'})
capitals.pop('China') # remove item.
# capitals.clear()

print(capitals['Vietnam'])
print(capitals.get('Germany'))
print(capitals.keys())
print(capitals.values())
print(capitals.items())
print(capitals)

for key, value in capitals.items():
    print(key, ": ", value)