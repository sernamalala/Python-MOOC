//JS ARRAYS
//EX1
//manipulate array
let numbers = [5, 10, 15, 20, 25];

console.log("The first element " + numbers[0]);
console.log("The last element " + numbers[numbers.length - 1]);
numbers[1] = 12;
console.log("The changed element of 10 is " + numbers[1]);
numbers.push(30);
console.log("The array is as follows " + numbers);
numbers.shift();
console.log("Remove the first element gives us this array" + numbers);

//EX2
//Loop and print numbers array using for loop and forEach
for (let i = 0; i < numbers.length; i++) {
  console.log(`Number is: ${numbers[i]}`);
}

/*array.forEach(

(singlenum) =>{action that must happen to each array element}
)

*/
numbers.forEach((singlenumber) => {
  console.log(`Number is: ${singlenumber}`);
});

//EX3
// Create a new array called `passed`.
// Push into `passed` only scores >= 60.

let score = [45, 70, 82, 30, 90, 60];

let passed = [];

for (let i = 0; i < score.length; i++) {
  if (score[i] >= 60) {
    passed.push(score[i]);
  }
}

console.log(`Passed Array is : ${passed}`);

//EX4
//Create new array where each price has 15% tax added.

let prices = [100, 200, 300];

let taxAddedPrices = [];
let taxPrice = 0;

for (let i = 0; i < prices.length; i++) {
  taxPrice = (15 / 100) * prices[i] + prices[i];
  taxAddedPrices.push(taxPrice);
}

console.log(`The tax added prices are ${taxAddedPrices}`);

//Bonus Challenge

// Rewrite EX3 using `.filter()`
//filter returns an element

let score2 = [45, 70, 82, 30, 90, 60];

let passed2 = [];

score2.filter((element) => {
  if (element >= 60) {
    passed2.push(element);
  }
});

console.log(`This is more than or equal to 60: ${passed2}`);
// Rewrite EX4 using `.map()`
//map transforms elements
//Create new array where each price has 15% tax added.

let prices2 = [100, 200, 300];

let taxAddedPrices2 = [];

prices2.map((element) => {
  taxAddedPrices2.push(element * 1.15);
});
console.log(`This is new tax prices : ${taxAddedPrices2}`);

//THE ABOVE WAS WRONG WAYS OF USING MAP AND FILTER, MAP AND ILTER RETURN ARRAYS!

let fix1 = score2.filter((element) => {
  return element >= 60;
});

console.log(`fix 1 ${fix1}`);

let fix2 = prices2.map((element) => {
  return element * 1.15;
});

console.log(`fix 2 ${fix2}`);

//Mini challenge

let products = [
  { name: "Laptop", price: 5000 },
  { name: "Phone", price: 2000 },
  { name: "TV", price: 3000 },
  { name: "Mouse", price: 500 },
];

let pricyName = products
  .filter((element) => {
    return element.price > 2500;
  })
  .map((element1) => {
    return element1.name;
  });

console.log("Pricy name is " + pricyName);
