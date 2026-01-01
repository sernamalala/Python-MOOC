function reverseWords(str) {
  let arr = str.split(" ");
  let newString = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i !== 0) {
      newString += `${arr[i]} `;
    } else {
      newString += `${arr[i]}`;
    }
  }
  return newString;
}
