const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

console.log(cleanInputString("+-99"));


let test = "9 + - 9";
console.log("No g :", test.replace(/[+\-\s]/, ""));   // 9- 9
console.log("With g:", test.replace(/[+\-\s]/g, "")); // 999 ✅




const patern = /[0-9]e[0-9]/gi;


console.log("351e5".match(patern));
console.log("e5".match(patern));