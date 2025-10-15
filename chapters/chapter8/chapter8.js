"use strict";
// Chapter-8 - Data Structures, Modern Operators and Strings
// Class1 - of - chapter8 - Destructuring array

const resturant = {
  name: "valleys cafe & resturant",
  location: ["Gulmarg main road", "Pahalgam main market"],
  categories: ["Non-veg", "Organic", "Italian", "Mughal_flavours"],
  starterMenu: ["Rista", "pizza", "yakhni", "korma"],
  mainMenu: ["rice", "biryani", "pulav", "Tabakh-Maaz"],
  openingHours: {
    thrusday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
    saturday: {
      open: 0, // open 24 hours
      close: 22,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex,
    mainIndex,
    time = "00:00",
    adress = "THEIR ADRESS",
    customerName = "CUSTOMER",
  }) {
    console.log(
      `${customerName}'s ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]}, is deliverd to ${adress} at ${time} `
    );
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

const { name, openingHours, categories } = resturant;
console.log(name, openingHours, categories);
// different names of variables than categories
const { name: abc, openingHours: def, categories: ghi } = resturant;
console.log(abc, def, ghi);

const { menu = [], starterMenu: starter1 = [] } = resturant;
console.log(starter1, menu);
console.log(menu);

// Mutating variables
let abcd = 111;
let bcde = 233;
const obj = { abcd: 23, bcde: 7, cdef: 3 };
({ abcd, bcde } = obj);
console.log(abcd, bcde);

// nested objects

const {
  friday: { open: o, close: cl },
} = openingHours; // here we need elements nested inside the object

console.log(o, cl);

resturant.orderDelivery({
  // Look here we didnt write them in correct order but it still goes at correct place due to destructing we just pass an object into the function
  time: "4:30 PM",
  adress: "Okai KUlgam",
  customerName: "Danish Nisar",
  starterIndex: 3,
  mainIndex: 1,
});

// SO IN SIMPLE WE DIDNT PUT MULTIPLE PARAMETRS INSIDE THE FUNCTION WE JUST PUT ONE OBJECT INSIDE THE FUNCTION LIKE FUNCTION ({abcd})-----> NOW INSIDE THAT WE PUT ANYTHING OR HOW MANY THINGS IT IS STILL CONSIDERED AS ONE OBJECT AND WHEN WE CALL IT WE JUST PUT ONE OBJECT INSIDE IT AND [OBJECT CAN CONTAIN MANY THINGS ] BUT STILL BE CONSIDERED AS ONE OBJECT AND OBJECT WORKS ON NAMES NOT POSITIONS AND WITHOUT DESTRUCTING WE HAVE TO WRITE LIKE THIS
/*
If we didn’t use destructuring,
the function would have to look like this:

orderDelivery: function (obj) {
  console.log(
    `${obj.customerName}'s ${this.starterMenu[obj.starterIndex]} & ${this.mainMenu[obj.mainIndex]}, is deliverd to ${obj.adress} at ${obj.time}`
  );
},


And we would still call it like this:

resturant.orderDelivery({
  time: "4:30 PM",
  adress: "Okai KUlgam",
  customerName: "Danish Nisar",
  starterIndex: 3,
  mainIndex: 1,
});


So inside the function, every time we need a value,
we’d have to write obj.something.

That’s long, messy, and ugly 😅
*/

/*
🧱 Step 1: The function itself
orderDelivery: function ({
  starterIndex,
  mainIndex,
  time,
  adress,
  customerName,
}) {
  console.log(
    `${customerName}'s ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]}, is deliverd to ${adress} at ${time}`
  );
},


Here the parameter looks like { starterIndex, mainIndex, time, adress, customerName }.

That means this function expects one object like this 👇

{
  starterIndex: ?,
  mainIndex: ?,
  time: ?,
  adress: ?,
  customerName: ?
}

🧠 Step 2: When we call it

We call it like this 👇

resturant.orderDelivery({
  time: "4:30 PM",
  adress: "Okai KUlgam",
  customerName: "Danish Nisar",
  starterIndex: 3,
  mainIndex: 1,
});


So here we are sending one object into the function.

That object is literally:

{
  time: "4:30 PM",
  adress: "Okai KUlgam",
  customerName: "Danish Nisar",
  starterIndex: 3,
  mainIndex: 1
}

⚙️ Step 3: What happens inside the function

When JavaScript runs this line:

function({ starterIndex, mainIndex, time, adress, customerName })


It takes the object you sent and opens it up — then it pulls out the values that match those names.
*/

// SO MAIN THING IS  One object → many properties → matched by name → destructured inside the function.

resturant.orderDelivery({
  starterIndex: 1,
  mainIndex: 2,
});
