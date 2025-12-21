# Write your solution here

count = 0
right = "4321"
while True:
    pin = input("PIN: ")
    count = count + 1
    if pin == right and count==1:
        print("Correct! It only took you one single attempt!")
        break
    elif pin==right and count>1:
        print(f"Correct! It took you {count} attempts")
        break
    else:
        print("Wrong")
