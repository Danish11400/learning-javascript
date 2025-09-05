/* Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI.The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

    Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

        Note: Don't round the BMI values. Leave them as they are.*/


let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);


if (BMIMark > BMIJohn) {
    console.log(`Marks Bmi is higer than John Bmi by ${BMIMark - BMIJohn}`);
}
else {
    console.log(`Johns Bmi is higer than Mark by ${BMIJohn - BMIMark}`);
}


const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
// console.log(BMIMark2, BMIJohn2);


// const markHigherBMI2 = BMIMark2 > BMIJohn2;
// console.log(markHigherBMI2);

if (BMIMark2 > BMIJohn2) {
    console.log(`Mark2 Bmi is higher than Jhon2 by ${BMIMark2 - BMIJohn2}`);
}
else {
    console.log(`John2 Bmi is higher than Mark2 by ${BMIJohn2 - BMIMark2}`);
}
