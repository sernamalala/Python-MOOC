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
let cartPrices = [200, 150, 400, 100];

let total = cartPrices.reduce((acc, element) => {
  return acc + element;
}, 0);

console.log(total);

//Core Ex2
//objects + reduce

let users = [
  { name: "Serna", age: 22 },
  { name: "Sky", age: 25 },
  { name: "Nani", age: 21 },
  { name: "PP", age: 27 },
];

let totalAge;

console.log(totalAge);
