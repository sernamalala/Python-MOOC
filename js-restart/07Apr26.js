//is Even

let isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    false;
  }
};

console.log(isEven(11));

//

function add(a, b) {
  a + b;
}

let answer = add(2, 3);
console.log(answer);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//14
let colors = ["red", "blue", "green"];
colors.forEach((color) => {
  console.log(color);
});

let textMessage = document.getElementById("message");
textMessage.innerText = "Hi Serna";

let button = document.getElementById("btn");

let isPressed = () => {
  console.log("Button clicked");
};
button.addEventListener("click", isPressed);

let greaterThan = (num) => {
  if (num > 100) {
    console.log("Too big");
  } else {
    console.log("Okay");
  }
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 12, 35, 77, 94, 456];

let greatestNum = (arrayVal) => {
  arrayVal.filter((num) => {});
};

console.log(greatestNum);

//27

let prices = [50, 100, 150];

let prices2 = prices.map((price) => {
  return price + 10;
});

console.log(prices2);

//28.

let names = ["Sky", "Nani", "Win"];

let longNames = names.filter((name) => {
  return name.length > 3;
});

console.log(longNames);
