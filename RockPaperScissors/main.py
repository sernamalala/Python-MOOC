#Rock paper scissors
#26/12/25

#importing the random module so that I can generate random choices
import random

print("Welcome to GMMTV Rock-Paper-Scissors Tournament!")

print("🪨 📃 ✂️")


proper_choices = ["rock","paper","scissors"]

computer_choice = proper_choices[random.randint(0,2)]
computer_score = 0

print("ROCK!")
print("PAPER!!")
print("SCISSORS!!!")
print("SHOOT!!!!")

player_choice = input("Enter your choice: ")
player_score = 0

#rock beats scissors
#paper beats rock
#scissors beats paper

if(player_choice.islower() == proper_choices[0] and computer_choice == proper_choices[2]) or (player_choice.islower() == proper_choices[0] and computer_choice == proper_choices[2]):

    print("Player has won this round!")
    player_score = player_score + 1

    print("Scores are: ")
    print(f"PLAYER 1 : {player_score}")
    print(f"PLAYER 1 : {computer_score}")
