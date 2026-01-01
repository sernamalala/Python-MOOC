// Exercise 1

let items = [
  {
    id: "tom125",
    name: "Tomato",
    qty: 5,
    category: "fruit",
  },
  {
    id: "cheese345",
    name: "Cheese",
    qty: 1,
    category: "dairy",
  },
  {
    id: "dough1278",
    name: "Dough",
    qty: 3,
    category: "carbs",
  },
  {
    id: "pep359",
    name: "Pepperoni",
    qty: 25,
    category: "meat",
  },
  {
    id: "oil904",
    name: "Avocado Oil",
    qty: 1,
    category: "fats and oils",
  },
];

console.log(items.length);
console.log(items);

//Exercise 2

let findById = (arr, id) => {
  const isThere = arr.find((thing) => {
    return thing.id === id;
  });

  return isThere || null;
};

console.log(findById(items, "pep359")); // should return Pepperoni object
console.log(findById(items, "does-not-exist")); // should return null

let findByName = (arr, name) => {
  const isThere = arr.find((thing) => {
    return thing.name.toLowerCase() === name.toLowerCase();
  });

  return isThere || null;
};

console.log(findByName(items, "cHeEsE")); // should return Cheese object
console.log(findByName(items, "banana")); // should return null
