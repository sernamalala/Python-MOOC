#Rock paper scissors
#26/12/25

#importing the random module so that I can generate random choices
import random

print("Welcome to GMMTV Rock-Paper-Scissors Tournament!")

print("🪨 📃 ✂️")


proper_choices = ["rock","paper","scissors"]

computer_choice = proper_choices[random.randint(0,2)]
computer_score = 0
player_score = 0

print("ROCK!")
print("PAPER!!")
print("SCISSORS!!!")
print("SHOOT!!!!")

while True:

    player_choice = input("Enter your choice: ")
    print("****")

#rock beats scissors
#paper beats rock
#scissors beats paper


    if(player_choice.lower() == proper_choices[0] and computer_choice == proper_choices[2]) or (player_choice.lower() == proper_choices[1] and computer_choice == proper_choices[0]) or (player_choice.lower() == proper_choices[2] and computer_choice == proper_choices[1]):
        player_score = player_score + 1

        if(player_score==5):
            print("Player 1 Has won the game!!!")
            print("Congrats! (*^_^*)")
            break
        else:
            print("Player has won this round!")
            print("GOOO GMMTV ╰(*°▽°*)╯")
        

    elif(player_choice.lower() == proper_choices[2] and computer_choice == proper_choices[0]) or (player_choice.lower() == proper_choices[0] and computer_choice == proper_choices[1]) or (player_choice.lower() == proper_choices[1] and computer_choice == proper_choices[2]):
        computer_score = computer_score + 1

        if(computer_score==5):
            print("Computer Has won the game,")
            print("Try again next time ＞﹏＜")
            break

        else:
            print("Computer has won this round.")
            print("TRY HARDER PLAYER 1!")
        

    elif(player_choice.lower() == proper_choices[0] and computer_choice == proper_choices[0]) or (player_choice.lower() == proper_choices[1] and computer_choice == proper_choices[1]) or (player_choice.lower() == proper_choices[2] and computer_choice == proper_choices[2]):
        print("It's a TIE 👔")
        print("TRY HARDER!!")

    else:
        print(" ⚠️ 🚨INVALID INPUT!🚨 ⚠️ ")
    

    print("***")        
    print("Scores are: ")
    print(f"PLAYER 1 : {player_score}")
    print(f"COMPUTER : {computer_score}")
    print("***")
    print("＞﹏＜")