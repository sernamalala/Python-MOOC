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

//Exercise 3

let addItem = (items, name, qty, category = "other") => {
  //spread operator allows a copy of an array to be made without changing the original
  let currentArray = [...items];
  if (
    typeof name === "string" &&
    name.trim() !== "" &&
    qty > 0 &&
    Number.isInteger(qty) &&
    typeof category === "string" &&
    category.trim() !== ""
  ) {
    let newID = `${name.trim().slice(0, 3).toLowerCase()}${Number.parseInt(
      Math.random() * 10000
    )}`;

    //.some method returns true or false
    //.find returns the value or undefined
    while (
      items.some((obj) => {
        return obj.id === newID;
      })
    ) {
      //trim trims all the whitespaces
      //.slice extracts those characters from the string, it is exclusive of the last num
      //Math.random, generates a decimal value, need to parse it into an integer

      newID = `${name.trim().slice(0, 3).toLowerCase()}${Number.parseInt(
        Math.random() * 10000
      )}`;
    }

    currentArray.push({
      id: newID,
      name: name.trim(),
      qty: qty,
      category: category.trim(),
    });
  }
  return currentArray;
};

const original = items;

const newItems = addItem(items, "Milk", 2, "dairy");
console.log(newItems);
console.log("Original length:", items.length); // 5
console.log("New length:", newItems.length); // 6
console.log("Original unchanged:", items.length === 5); // true
console.log("New item exists:", findByName(newItems, "milk") !== null); // true

console.log(addItem(items, "   ", 2, "dairy").length); // 5
console.log(addItem(items, "Bread", 0, "carbs").length); // 5
console.log(addItem(items, "Bread", 2.5, "carbs").length); // 5
