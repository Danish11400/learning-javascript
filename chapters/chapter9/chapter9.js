"use strict";

const number_of_class = 10;
const numberOfChapter = 9;
let result = "";
for (let i = 1; i < 5; i++) {
  result += `![🗎 View image](./images/class${number_of_class}-chapter${numberOfChapter}_${i}.jpg)<br>`;
}
document.getElementById("output").innerHTML = result;

// Chapter 9 _ A Closer Look At Functions

// Class2 - of - Chapter9 - Default Parameters

const bookings = [];
const checkBookings = (
  flightNum = "Enter A Valid Flight NUmber",
  numPassengers = "Enter Correct NUmber Of Passengers",
  ticketPrice = 199 * numPassengers
) => {
  const booking = { flightNum, numPassengers, ticketPrice };

  bookings.push(booking);
};
console.log(bookings);
checkBookings(undefined, 2);
checkBookings("LH32A4", 33);

// Class3 - of - Chapter9 - How Passing Arguments Works Value vs. Reference

const flight1 = "LH321";
const jonas = {
  name: "Jonas",
  passport: 123456789,
};

const checkIn = function (flightNUm, Passengers) {
  flightNUm = "LI321";
  Passengers.name = "motu patlu" + " " + Passengers.name; // turn off for interrupting purpose

  // if (Passengers.passport === 123456789) {
  //   alert("You Are Checked In");
  // } else {
  //   alert("Wrong Passport");
  // }
  // console.log(flight1);
  // console.log(flightNUm);
};
// checkIn(flight1, jonas);
// console.log(flight1, jonas);

const newPassport = (person) => {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
console.log(jonas.passport);
checkIn(flight1, jonas);

// Class4 - of - chapter9 - Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replaceAll(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" "); // .join only allows on arrays like [array].join
};

const transformer = function (str, fn) {
  console.log(`Original One: ${str}`);
  console.log(`Transform One: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is best!", oneWord);

console.log(`<------------------------------------------->`);
transformer("Javascript is best!", upperFirstWord);

const high5 = function () {
  // console.log("👋");
};
document.body.addEventListener("click", high5);

// Class5 - of - chapter9 - functions returning functions

// with normal function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetHey = greet("hey");
greetHey("Danish");
greet("hello")("Jonas");

// with arrow function

const greet2 = (greeting2) => {
  return (name2) => {
    console.log(`${greeting2} ${name2}`);
  };
};
const greetHey2 = greet2("assalamalikum");
greetHey2("habibi");

// Class6 - of - Chapter9 - The call and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book: function (FlightNUm, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${FlightNUm}`
    );
    // this.bookings.push({
    //   flight: `${this.iataCode} ${FlightNUm}`,
    //   airline: `${this.airline}`,
    //   name,
    // });
  },
};
lufthansa.book(23, "danish nisar");
console.log(lufthansa.bookings);

// make new airline now

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, "hello bro");
book.call(lufthansa, 20003, "Motu Patlu");

const swiss = {
  airline: "swiss",
  iataCode: "SW",
  bookings: [],
};

book.call(swiss, 426, "Dr.Jatks & Gaseetaram");
const arrData = [3004, "Boxer Baya"];
book.apply(swiss, arrData);
book.call(eurowings, ...arrData);

// Class7 - of - Chapter9 - The Bind Methods

const bookBInd = book.bind(swiss);
bookBInd(2113, "Chingam Sir");

const bookLH = book.bind(lufthansa, 2050);
bookLH("Chai Walei Bhaiya");

lufthansa.planes = 300;
lufthansa.buyplanes = function () {
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyplanes.bind(lufthansa));

// partial application
const addTax = (rate, value) => {
  return value + value * rate;
};

console.log(addTax(0.1, 200));
const addVat = addTax.bind(null, 0.23);
console.log(addVat(0.23));

// Class8 - chapter9 - IIFE

(function () {
  console.log(`This Wll never run again`);
})();

// Class9 - of - Chapter9 - Clousers

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount}: passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

// Class10 - of - Chapter9 - More Clousers Examples
