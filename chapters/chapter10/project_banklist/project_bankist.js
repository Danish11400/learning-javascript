"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

const bankDetails = {
  name: "pata nahi kuch rakh la gai baad mai",
  location: "Gulmarg",
};

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

// displayMovements(account1.movements);
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

/* USING .filter
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);
*/

/*
let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`iteration ${i + 1} : accumulator = ${acc}, current = ${cur}`);
  return acc + cur;
}, 0);

console.log(`Final balance: ${balance}`);

// with for of loop

let balanceFor = 0;
for (const [i, mov] of movements.entries()) {
  balanceFor += mov;
  console.log(`iteration ${i + 1} : ${balanceFor}`);
}

*/

const displaycalcBalance = function (accs) {
  const avilableBalance = accs.movements.reduce(function (
    acmltr,
    currentAmount
  ) {
    return acmltr + currentAmount;
  },
  0);
  accs.balance = avilableBalance; // sir did here that balance thing[ here add new property to our accounts called balance]

  labelBalance.textContent = `${avilableBalance}€`;
  console.log(`${avilableBalance}€`);
};

// displaycalcBalance(account1);

/*

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")

4. Run the function for both test datasets

HINT: use tools from all lectures from this section so far

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 🥰

*/

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCopy = dogsJulia.splice(1, 2);

  const correctedData = dogsJuliaCopy.concat(dogsKate);
  correctedData.forEach(function (dogAge, i, arr) {
    const puppyOrAdult = dogAge >= 3 ? "Adult" : "Still a Puppy";
    console.log(`Dog Number ${i + 1} is ${puppyOrAdult} and is ${dogAge} old`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log("<-------------------------------------->");
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Coding Challenge #2

/*

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2* dogAge. If the dog is > 2 years old, humanAge = 16+ dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 31]

TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

console.log(`<------Coding Challenge 2 starts------->`);

const calcAverageHumanAge = function (ages) {
  const newages = ages.map((dogsAge) =>
    dogsAge <= 2 ? 2 * dogsAge : dogsAge * 4 + 16
  );

  const human18 = newages.filter((age) => age >= 18);
  const ageAvg =
    human18.reduce((acc, age, arr) => acc + age, 0) / human18.length;
  //acc + age, 0) / human18.length === acc + age / arr.length
  // we could have do this also

  console.log(`Human ages: ${newages}`);
  console.log(`Adult dogs (18+): ${human18}`);
  console.log(`Average human age: ${ageAvg}`);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 31]);
console.log(`<---------------->`);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Class 16- chapter 10 - the magic of chaining methods

const euroToUsd = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totaldepositUsd = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totaldepositUsd);

// now adding summary for our project

const calcDisplaySummaryIncome = function (accs) {
  const income = accs.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const outcome = accs.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  const interest = accs.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * accs.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummaryIncome(account1);

// class17. - the find method

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find((acc) => acc.interestRate === 1.2);
console.log(account);

// class 18 - login implementation
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault(); // prevent form reload

  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  currentAccount = accounts.find(
    (acc) => acc.userName === username && acc.pin === pin
  );

  if (currentAccount) {
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(" ")[0]
    }`;

    displayMovements(currentAccount.movements);
    displaycalcBalance(currentAccount);
    calcDisplaySummaryIncome(currentAccount);
    containerApp.style.opacity = 1;
    // after login in our login----> username input and pin input still remains filled with our text so to clear that we can use
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    //and we can also type like this .blur can make the value blur which means hidden and looks like it clear the inputs
    // inputLoginPin.blur();
  } else {
    alert("Wrong username or PIN");
  }
});

// class19. transfer amount

// AND ITS MY VERSION OF CODE MIGHT TURN IT OFF AFTER SEEINGS SIRS CODE

/*


btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const balance = Number(labelBalance.textContent.replace("€", "")); // sir did here store balace in accounts like acc.balance=availablebalance [basically adding balace property to accounts in displaycalcBalance function and i just convert string into number which is related to avilablebalance and compare with that and be rebelious is good thing]

  const amountTransfer = Number(inputTransferAmount.value);
  const amountRemoved = Number(-amountTransfer);

  const receiverAccount = accounts.find(
    (name) => name?.userName === inputTransferTo.value
  );

  if (balance === 0) {
    alert(`Your Account Have Zero(0) Amount`);
  } else if (amountTransfer > balance) {
    alert(`Not Enough Money`);
  } else if (
    receiverAccount !== currentAccount &&
    balance !== 0 &&
    amountTransfer <= balance &&
    amountTransfer > 0
  ) {
    receiverAccount.movements.push(amountTransfer);
    currentAccount.movements.push(amountRemoved);
    displayMovements(currentAccount.movements);
    displaycalcBalance(currentAccount);
    calcDisplaySummaryIncome(currentAccount);
  }

  // clearing inputs

  inputTransferTo.value = "";
  inputTransferAmount.value = "";
});
*/

// update UI function

const updateUI = function (acc) {
  displayMovements(acc.movements);
  displaycalcBalance(acc);
  calcDisplaySummaryIncome(acc);
};

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  // guard clause first
  if (!currentAccount) return;

  const amountTransfer = Number(inputTransferAmount.value);
  const amountRemoved = -amountTransfer;

  const receiverAccount = accounts.find(
    (name) => name?.userName === inputTransferTo.value
  );

  // if receiver account didnt exist or wrong username
  if (!receiverAccount) {
    alert("Receiver username not found!");
    return;
  }

  if (amountTransfer <= 0) {
    alert("Enter a valid amount!");
    return;
  } else if (currentAccount.balance === 0) {
    alert(`Your Account Has Zero(0) Amount`);
  } else if (amountTransfer > currentAccount.balance) {
    alert(`Not Enough Money`);
  } else if (
    receiverAccount !== currentAccount &&
    amountTransfer > 0 &&
    amountTransfer <= currentAccount.balance
  ) {
    receiverAccount.movements.push(amountTransfer);
    currentAccount.movements.push(amountRemoved);

    // update UI for current account
    updateUI(currentAccount);
  }

  // clearing inputs
  inputTransferTo.value = "";
  inputTransferAmount.value = "";
});

// class21 - the findIndex method
const indexNumber = accounts.findIndex((mov) => mov.pin === 3333);
console.log(indexNumber);

// apply findIndex method for close account in our project
btnClose.addEventListener("click", function (e) {
  e.preventDefault(); // prevents auto refresh or reload

  // quick guard: ensure someone is logged in
  if (!currentAccount) return console.log("No account is logged in");

  // guard: The logged user can only delete his account not others
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Finds the index number of deleted account
    const closeAccountIndexNUmber = accounts.findIndex(
      (Credential) =>
        Credential.userName === inputCloseUsername.value &&
        Credential.pin === Number(inputClosePin.value)
    );

    // Deletes or removes the account from the accounts array

    // hides the UI after clicking the btnClose
    containerApp.style.opacity = 0;

    // clears the input fields
    inputCloseUsername.value = inputClosePin.value = "";
  } else {
    alert("Username or PIN incorrect / Enter logged account details only");
  }
});

// class23 - some and every method

// working on loan on the project

btnLoan.addEventListener("click", function (e) {
  e.preventDefault(); // prevents auto reload [auto reload happens when we make a button in from element in html so to prevent auto reload we use this]
  const loanAmount = Number(inputLoanAmount.value);

  // Condition of bank
  const approval = currentAccount.movements.some(
    (mov) => mov >= (loanAmount * 10) / 100
  );

  // update UI if condition is true
  if (approval && loanAmount >= 0) {
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  } else if (!approval) {
    // if condition is false
    alert(`Not Eligible For That Loan Amount /n rule: Loan Amount should be equal
           to one deposit Atleast 10% of of 
           Loan amount
      `);
  }
  // clearing input field
  inputLoanAmount.value = "";
});

// Class24 - Chapter10 - Flat and FlatMap

// Bank personal info
const overAllBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acmltr, mov) => acmltr + mov, 0);
console.log(overAllBalance); // result---->17840

bankDetails.bankBalance = overAllBalance;

// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"

const huskyIndexNumber = breeds.findIndex((name) => name.breed === "Husky");
console.log(huskyIndexNumber);

const huskyWeight = breeds.at(huskyIndexNumber).averageWeight;
console.log(huskyWeight);

// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
