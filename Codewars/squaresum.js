function squareSum(numbers) {
  let add = 0;

  numbers.forEach((element) => {
    add = add + element * element;
  });
  return add;
}
