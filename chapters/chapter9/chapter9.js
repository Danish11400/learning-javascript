"use strict";

const number_of_class = 3;
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
  Passengers.name = "motu patlu" + " " + Passengers.name;
  if (Passengers.passport === 123456789) {
    alert("You Are Checked In");
  } else {
    alert("Wrong Passport");
  }
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
