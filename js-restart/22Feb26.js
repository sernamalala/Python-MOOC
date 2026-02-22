//EX 1 Build the render() function

/*
Clears the list

Loops through fruits

Creates an <li> for each item

Adds it to the <ul>

If the array is empty: show a message in #empty

If not empty: clear that message
*/
let fruits = ["Apple", "banana", "Orange"];

let listContainer = document.getElementById("list");
let emptyMsg = document.getElementById("empty");

let renderFruits = () => {
  listContainer.innerHTML = "";

  if (fruits.length === 0) {
    emptyMsg.innerText = "The array is empty.";
  } else {
    fruits.forEach((fruit) => {
      let lsitItem = document.createElement("li");
      lsitItem.innerText = fruit;
      emptyMsg.innerText = "";
      listContainer.append(lsitItem);
    });
  }
};

console.log(renderFruits());
