let orders = [
  { item: "Laptop", category: "Electronics" },
  { item: "Shirt", category: "Clothing" },
  { item: "Phone", category: "Electronics" },
  { item: "Jeans", category: "Clothing" },
  { item: "TV", category: "Electronics" },
];

//Exercise 2 Array methods /* Use reduce to count how many items per category. */
let itemCat = orders.reduce((accumulator, current) => {
  if (accumulator[current.category]) {
    accumulator[current.category]++;
  } else {
    accumulator[current.category] = 1;
  }
  return accumulator;
}, {});

console.log(itemCat);

//DOM PRACTICE
//EXERCISE 1 — Selecting + Changing Text
let h1Heading = document.getElementById("title");
h1Heading.innerHTML = "Serna is back";

//EXERCISE 2 — Event Listener & EXERCISE 3 — Style Manipulation
let btn = document.getElementById("changeBtn");
//declare function to put in click eventlistener
let clickFunction = () => {
  h1Heading.innerHTML = "Button was clicked";
  h1Heading.style.color = "skyblue";
  h1Heading.style.fontSize = "100px";
  document.querySelector("body").style.backgroundColor = "red";
};

btn.addEventListener("click", clickFunction);

//EXERCISE 4 — Rendering an Array to the Page

/*
1️⃣ Select the ul
2️⃣ Loop through fruits
3️⃣ For each fruit:

Create a <li>

Set its text

Append it to the ul
*/
let fruits = ["Apple", "Banana", "Orange"];

let listContainer = document.getElementById("list");

let listItems = fruits.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerText = item;
  listContainer.appendChild(listItem);
});

console.log(listItems);
