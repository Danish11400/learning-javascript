"use strict";
// Chapter-8 - Data Structures, Modern Operators and Strings
// Class1 - of - chapter8 - Destructuring array

const resturant = {
  name: "valleys cafe & resturant",
  location: ["Gulmarg main road", "Pahalgam main market"],
  categories: ["Non-veg", "Organic", "Italian", "Mughal_flavours"],
  starterMenu: ["Rista", "pizza", "yakhni", "korma"],
  mainMenu: ["rice", "biryani", "pulav", "Tabakh-Maaz"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

let [first, , , second] = resturant.categories;
console.log(first, second);

const temp = first; // temp-->non-veg
first = second; // first--->mughal
second = temp; //second---->temp(non-veg)
// so now ist and second interchange
console.log(temp, first, second);

// Now we do it with destructuring
let [adress1, adress2] = resturant.location;
console.log(adress1, adress2);

// till here adress1-->gulgamrg
// adress2--->pahalgam

// now if we want to interchange them with destructing easily

// Switching variables with the help of destructuring
[adress1, adress2] = [adress2, adress1];
console.log(adress1, adress2);

// now we can put result(result array returned from an function) in different variables with the help of destructing
console.log(resturant.order(2, 0)); // here we just print an array result is
//["yakhni","Rice"]

// but we can put the array in variables
const [starter, main] = resturant.order(2, 0);
console.log(main, starter);

// we can do desturucting inside the desutring eg.

const nested = [2, 4, 5, [4, 7, 1]];
const [i, , , j] = nested;
console.log(i, j); // till here we get array also but if we want inside array inside elements also then do desturucting inside the desutring

const [a, , , [b, , c]] = nested;
console.log(a, b, c); // now we get inside array then inside another array inside elements
// Default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Class2 - of - chapter8 - Destructuring Objects
