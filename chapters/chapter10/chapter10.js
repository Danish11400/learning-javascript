"use strict";

const number_of_class = 4;
const numberOfChapter = 10;
let result = "";
for (let i = 1; i < 4; i++) {
  result += `![🗎 View image](./images/class${number_of_class}-chapter${numberOfChapter}_${i}.jpg)<br>`;
}
document.getElementById("output").innerHTML = result;

// Class2 of chapter10 - simple array method

// Class3 of Chapter10 - at method

// Class4 of Chapter10 - forEach looping

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`you deposit :${movement}`);
  } else {
    console.log(`you withdraw : ${Math.abs(movement)}`);
  }
});
