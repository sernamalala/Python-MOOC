//Exercise 1
//Using .map(), create a new array where each number is doubled.
let numbers = [2, 4, 6, 8, 10];

let newNum = numbers.map((element) => {
  return element * 2;
});

console.log(`[${newNum}]`);

//Exercise 2
//Using .filter(), get only numbers greater than 5.

let filterNum = numbers.filter((element) => {
  return element > 5;
});

console.log(`[${filterNum}]`);

//Core Ex1
//reduce
//Use .reduce() to calculate the total price.
let cartPrices = [200, 150, 400, 100];

let total = cartPrices.reduce((acc, element) => {
  return acc + element;
}, 0);

console.log(total);

//Core Ex2
//objects + reduce
//Use reduce to calculate total age of all users.

let users = [
  { name: "Serna", age: 22 },
  { name: "Sky", age: 25 },
  { name: "Nani", age: 21 },
  { name: "PP", age: 27 },
];

let totalAge = users.reduce((accumulator, current) => {
  return accumulator + current.age;
}, 0);

console.log("The total age is " + totalAge);

//Core 3
/*
Do all of this in ONE chain:

1. Filter products above 1000
2. Add 10% tax to each price
3. Get the total price of those taxed products
*/

let products = [
  { name: "Laptop", price: 5000 },
  { name: "Phone", price: 2000 },
  { name: "TV", price: 3000 },
  { name: "Mouse", price: 500 },
];

let myProducts = products
  .filter((element) => {
    return element.price > 1000;
  })
  .map((element) => {
    return element.price * 1.1;
  })
  .reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);

console.log("The total products price: " + myProducts);
