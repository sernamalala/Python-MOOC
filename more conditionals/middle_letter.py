# Write your solution here

word1 = input("1st letter: ")
word2 = input("2nd letter: ")
word3 = input("3rd letter: ")

if (word1>word2 and word1>word3 and word2<word3) or (word1<word2 and word3<word2 and word1<word3):
    print(f"The letter in the middle is {word3}")

elif (word1>word2 and word1>word3 and word2<word1 and word2>word3) or (word1<word2 and word1<word3 and word2<word3):
    print(f"The letter in the middle is {word2}")

else:
    print(f"The letter in the middle is {word1}")
