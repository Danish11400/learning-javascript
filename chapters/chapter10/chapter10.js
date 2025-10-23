"use strict";

const number_of_class = 3;
const numberOfChapter = 10;
let result = "";
for (let i = 1; i < 4; i++) {
  result += `![🗎 View image](./images/class${number_of_class}-chapter${numberOfChapter}_${i}.jpg)<br>`;
}
document.getElementById("output").innerHTML = result;

// Class2 of chapter10 - simple array method

// Class3 of Chapter10 - at method
