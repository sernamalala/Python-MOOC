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
