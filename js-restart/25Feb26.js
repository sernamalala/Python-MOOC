//EX1

/*
EXERCISE 1: Build the render() function (core skill)
Requirements:
Clears the list
Loops through fruits
Creates an <li> for each item
Adds it to the <ul>
If the array is empty: show a message in #empty
If not empty: clear that message
*/

let fruits = ["Apple", "Banana", "Orange"];

let listContainer = document.getElementById("list");
let emptyMsg = document.getElementById("empty");

function renderFruits() {
  listContainer.innerHTML = "";

  if (fruits.length === 0) {
    emptyMsg.innerText = "There are no fruits.";
    return;
  }
  ///works on each li
  else {
    fruits.forEach((fruit, index) => {
      emptyMsg.innerText = "";
      let listItem = document.createElement("li");
      listItem.innerText = fruit;

      //EX 3
      //create eventlistener

      listItem.addEventListener("click", () => {
        fruits.splice(index, 1);
        renderFruits();
      });

      listContainer.appendChild(listItem);
    });
  }
}

renderFruits();

/*EXERCISE 2: Add item from input
Requirements:
Button addBtn adds input value to array

Input should trim spaces

If input is empty: do nothing

After adding: clear input

Call renderFruits() */

let fruitInput = document.getElementById("fruitInput");
let addBtn = document.getElementById("addBtn");

let addFruit = () => {
  let currentInput = fruitInput.value;

  if (currentInput.trim() !== "") {
    fruits.push(currentInput);
    fruitInput.value = ""; //clear input field
  }

  renderFruits();
};

addBtn.addEventListener("click", addFruit);

/*
EXERCISE 3: Remove an item by clicking it
Requirements:

Each <li> should remove itself when clicked
But do it properly: remove from the array, then re-render

Hint:
Use index in your loop
Use fruits.splice(index, 1)
So your renderFruits() will need to know each item’s index. */

/*EXERCISE 4: Random button
Requirements:

When randomBtn is clicked: pick a random fruit and add it

Then call renderFruits()

You can reuse your randomFruits list.*/

const randomFruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Blueberry",
  "Kiwi",
  "Papaya",
  "Pineapple",
  "Pomegranate",
  "Peach",
  "Pear",
  "Cherry",
  "Raspberry",
  "Blackberry",
  "Lemon",
  "Lime",
  "Grapefruit",
  "Mandarin",
  "Tangerine",
  "Cantaloupe",
  "Apricot",
  "Plum",
  "Nectarine",
  "Avocado",
  "Coconut",
  "Dragon Fruit",
  "Lychee",
  "Durian",
  "Guava",
  "Passion Fruit",
  "Star Fruit",
  "Persimmon",
  "Quince",
  "Gooseberry",
  "Kumquat",
  "Rambutan",
  "Sapodilla",
  "Loquat",
  "Jujube",
  "Breadfruit",
  "Jackfruit",
  "Fig",
  "Date",
  "Mangosteen",
  "Currant",
  "Boysenberry",
  "Elderberry",
];

let randomBtn = document.getElementById("randomBtn");

let randomFruit = () => {
  let randomNum = Math.floor(Math.random() * randomFruits.length); //random num
  let oneRandomFruit = randomFruits[randomNum];
  fruits.push(oneRandomFruit); //push random fruit to fruits array
  renderFruits();
  fruitInput.value = ""; //clear input field
};

randomBtn.addEventListener("click", randomFruit);
