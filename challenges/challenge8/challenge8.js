/*
Instructions
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals(tips and totals)

Use the calcTip function we wrote before(included in the starter code) to calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument.This function calculates the average of all numbers in the given array.This is a DIFFICULT challenge(we haven't done this before)! Here is how to solve it if you feel like it:

1. First, you will need to add up all values in the array.To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop.In each iteration, add the current value to the sum variable.This way, by the end of the loop, you have all values added together.

2. To calculate the average, divide the sum you calculated before by the length of the array(because that's the number of elements).

3. Call the function with the totals array.

*/

function calcTip(bill) {

    const tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100;

    // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
    return tip;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];


for (i = 0; i < 10; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(`your bill is ${bills} and your tip is ${tips} and total is${totals}`)



const calcAverage = function (arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        // sum = sum + arr[i];

        sum += arr[i];

    }

    return sum / arr.length;

}

/*
🧠 Step-by-Step Explanation:

Function Declaration:

const calcAverage = function (arr) {


calcAverage is a function that takes one parameter arr (which is expected to be an array of numbers).

Initialize sum:

let sum = 0;


You start with a variable sum set to 0. This will hold the total of all numbers in the array.

Loop through the array:

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}


This for loop goes through each element in the array:

arr[i] accesses the element at index i.

sum += arr[i] adds it to sum.

Example with [2, 3, 7]:

i = 0 → sum = 0 + 2 = 2

i = 1 → sum = 2 + 3 = 5

i = 2 → sum = 5 + 7 = 12

Calculate Average:

return sum / arr.length;


sum = 12

arr.length = 3

12 / 3 = 4

So the function returns 4.

Output:

console.log(calcAverage([2, 3, 7]));


This prints: 4

🧪 Final Result:

✅ Output: 4
*/

console.log(calcAverage([2, 3, 7]));

console.log(calcAverage(totals));

console.log(calcAverage(tips));