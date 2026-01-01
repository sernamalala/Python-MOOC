function solution(str) {
  let arr = str.split("");
  let newString = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    newString += arr[i];
  }
  return newString;
}
