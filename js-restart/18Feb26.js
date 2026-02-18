//JS ARRAYS
//EX1
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
for (let i = 0; i++; i < numbers.length) {
  console.log(`Number is: ${numbers[i]}`);
}
