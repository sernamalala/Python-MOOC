# Write your solution here

num = int(input("Number: "))

if num%3==0 and num%5!=0:
    print("Fizz")
if num%3!=0 and num%5==0:
    print("Buzz")
if num%3==0 and num%5==0:
    print("FizzBuzz")