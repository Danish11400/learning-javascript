"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);
/*
<--------------------------------------------------------------------------------------------------->


 -  .innerHTML---->same as the textContent  ----> but in textContent we select only text but in innerHTML we select html tags + text inside that also eg.
 - <div> hello </div>  . textContent selects only text[hello]
                      . innerHTML selects whole thing[<div> hello </div>]



<------------------------------------------------------------------------------------------------>
*/
//  containerMovements.insertAdjacentHTML("afterbegin", html);
/*

element.insertAdjacentHTML(position, htmlString);
element → where you want to insert HTML

position → where relative to the element

htmlString → the HTML code you want to insert

🧭 The four positions
There are 4 valid position keywords you can use:

Position	Where the HTML gets inserted
- "beforebegin"	Before the element itself
- "afterbegin"	Inside, at the start of the element
- "beforeend"	Inside, at the end of the element
- "afterend"	After the element itself

📘 Example

Suppose your HTML:

<div id="box">Hello</div>


And your JavaScript:

const box = document.querySelector('#box');

box.insertAdjacentHTML('beforebegin', '<p>1. beforebegin</p>');
box.insertAdjacentHTML('afterbegin', '<p>2. afterbegin</p>');
box.insertAdjacentHTML('beforeend', '<p>3. beforeend</p>');
box.insertAdjacentHTML('afterend', '<p>4. afterend</p>');

💡 Output visually:
<p>1. beforebegin</p>
<div id="box">
  <p>2. afterbegin</p>
  Hello
  <p>3. beforeend</p>
</div>
<p>4. afterend</p>



IMPORTANT ---->
🧠 In short:
Position	Meaning
beforebegin	Add before the element
afterbegin	Add as the first child inside the element
beforeend	Add as the last child inside the element
afterend	Add after the element


*/

/* practice of adding more proprties to object use in username case
const obj = {
  name: "Danish",
  age: 18,
};
console.log(obj);

obj.birthyear = 2007;
console.log(obj);
*/

const createUserName = (accs) => {
  for (const acc of accs) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  }
};
createUserName(accounts);
console.log(accounts);
/* 
.toLowerCase()
    .split(" ")
    .map(function (usersIstLetter) {
      return usersIstLetter[0];
    })
    .join("");
    */
