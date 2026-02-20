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
