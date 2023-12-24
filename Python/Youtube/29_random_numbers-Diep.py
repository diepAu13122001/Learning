import random

x = random.randint(1, 10)
print(x)

y = random.random()  # 0 -> 1 (dec)
print(y)

myList = ["Bun bo", "Banh canh cua", "Hu tieu ga", "Pho tai", "Com suon"]
z = random.choice(myList)
print(z)

cards = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"]
random.shuffle(cards) # tron cac la bai khac nhau
print(cards)

