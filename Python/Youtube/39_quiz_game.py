# -------------------------------------------------
def new_game():
    guesses = []
    correct_guesses = 0
    question_num = 0

    for key in questions:
        print("--------------------------------------")
        # print question
        print(key)

        # print option answers
        for i in options[question_num]:
            print(i)
        # user input ans
        guess = input("Enter (A, B, C, or D)? ").upper()
        # add ans in list to check after
        guesses.append(guess)
        # check ans and get score
        correct_guesses += check_answer(questions.get(key), guess)
        question_num += 1
    # show the current score
    display_score(correct_guesses, guesses)

# -------------------------------------------------


def check_answer(answer, guess):
    if answer == guess:
        print("CORRECT!")
        return 1
    else:
        print("WRONG!")
        return 0

# -------------------------------------------------


def display_score(correct_guesses, guesses):
    print("------------------")
    print("RESULTS")
    print("-------------------")
    # print correct ans
    print("Answers: ", end="")
    for i in questions:
        print(questions.get(i), end=" ")
    print()
    # compare ith your ans
    print("Guesses: ", end="")
    for i in guesses:
        print(i, end=" ")
    print()
    # show score
    score = int((correct_guesses/len(questions))*100)
    print("Your score is: "+str(score)+"%")
# -------------------------------------------------


def play_again():
    response = input("Do you want to play again (Y/N)? ").upper()
    if (response == "Y"):
        return True
    else:
        return False


# dictionary
questions = {
    "Who created Python?": "A",
    "What year was Python created?": "B",
    "Python is a tribute to which comedy group?": "C",
    "Is the Earth round?": "A"
}

# 2D list
options = [
    ["A. Guido van Rossum", "B. Elon Musk", "C. Bill Gates", "D. Mark Zuckerburg"],
    ["A. 1989", "B. 1991", "C. 2000", "D. 2016"],
    ["A. Lonely Island", "B. Smosh", "C. Monty Python", "D. SNL"],
    ["A. True", "B. False", "C. sometimes", "D. What's Earth?"]
]

new_game()

while play_again():
    new_game()

print("bye Byeeeeeeeeeee!!!")
