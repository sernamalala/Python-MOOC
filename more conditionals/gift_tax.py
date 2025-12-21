# Write your solution here

value = float(input("Value of gift: "))

tax = 100
percent = 8/100

if value<5000:
    print("No tax!")

elif value>=5000 and value<25000:
    full_tax = tax +(value-5000)*percent
    print(f"Amount of tax: {full_tax} euros")

elif value>=25000 and value<55000:
    tax = 1700
    percent = 10/100
    full_tax = tax +(value-25000)*percent
    print(f"Amount of tax: {full_tax} euros")

elif value>=55000 and value<200000:
    tax = 4700
    percent = 12/100
    full_tax = tax +(value-55000)*percent
    print(f"Amount of tax: {full_tax} euros")

elif value>=200000 and value<1000000:
    tax = 22100
    percent = 15/100
    full_tax = tax +(value-200000)*percent
    print(f"Amount of tax: {full_tax} euros")
elif value>=1000000:
    tax = 142100
    percent = 17/100
    full_tax = tax +(value-1000000)*percent
    print(f"Amount of tax: {full_tax} euros")