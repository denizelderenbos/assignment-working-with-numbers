const numbers = [];

for (i = 0; i < 249; i++) {
  numbers[i] = getRndInteger(10, 300);
}
for (i = 250; i < 500; i++) {
  numbers[i] = getRndInteger(500, 700);
}

let highestNum = 0;
let highestIndex = 0;
let lowestNum = numbers[1];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] > highestNum) {
    highestNum = numbers[i];
    highestIndex = i;
  }
  if (numbers[i] < lowestNum) {
    lowestNum = numbers[i];
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var para = document.createElement("p");
var node = document.createTextNode(`Uit het array van ${numbers.length} getallen is het getal ${highestNum} het grootst. Dit getal zit in index ${highestIndex} in het array.`);
para.appendChild(node);

var body = document.querySelector("body");
body.appendChild(para);