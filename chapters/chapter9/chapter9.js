"use strict";

const number_of_class = 2;
const numberOfChapter = 9;
let result = "";
for (let i = 1; i < 4; i++) {
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
