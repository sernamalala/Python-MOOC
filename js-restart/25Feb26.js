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
  listContainer.innerText = "";

  fruits.forEach((fruit) => {
    if (fruits.length === 0) {
      emptyMsg.innerText = "There are no fruits.";
    } else {
      let listItem = document.createElement("li");
      listItem.innerText = fruit;
      listContainer.appendChild(listItem);
    }
  });
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
    fruitInput.value = " "; //clear input field
  }

  renderFruits();
};

addBtn.addEventListener("click", addFruit);
