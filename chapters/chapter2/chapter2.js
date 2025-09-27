/*      


// Class 1 to 2 - of - chapter2 - Activating Strict Mode

'use strict';


// class3 - of - chapter2 - Functions

function hello(b, c) {
    const a = c + b;
    return a;
}

const hi = hello(2, 8);
console.log(hi);




function pen(e, f) {
    const g = e + f;
    console.log(g);
}
pen(8, 8);



// Class4 - of - chapter2 - Function Declaration vs Expressions


// Function Declaration
const age1 = caclAge1(2007);
console.log(age1);

function caclAge1(birthYear) {
    return 2025 - birthYear;
}

// Function Expressions

const calcAge2 = function (birthYear2) {
    return 2025 - birthYear2;
}
const age2 = calcAge2(2007);
console.log(age2);


// Class5 - of - chapter2 - Arrow Functions

const clacAge3 = birthYear => 2073 - birthYear;
const age = clacAge3(2007);
console.log(age);

const mobileNameAndWarranty = (buyYear, timeUsedInYears, naam) => {
    const warrantyTime = 2025 - buyYear;
    const warrantyLeft = warrantyTime - timeUsedInYears;
    return `${naam} warranty left only ${warrantyLeft} years`;
}
const hi3 = mobileNameAndWarranty(2023, 1.4, "poco");
console.log(hi3);


// Class6 - of - chapter2 - Functions Calling Other Functions



var warrantyMonths3 = function (inMonths) {
    return inMonths * 12;
}


const mobileNameAndWarranty2 = (buyYear3, timeUsedInYears3, naam3) => {



    const warrantyTime3 = 2025 - buyYear3;
    const warrantyLeft3 = warrantyTime3 - timeUsedInYears3;

    var howMonths3 = warrantyMonths3(warrantyLeft3)


    return `${naam3} warranty left only ${howMonths3} months`;
}
const hi32 = mobileNameAndWarranty2(2023, 1.5, "poco m4 pro 5G");
console.log(hi32);

*/


// Class7 - of - chapter2 - Function Reviewing

/*
let buyYear3 = prompt(`enter buying year`);
let timeUsedInYears3 = prompt(`how many years u used it`);
let naam3 = prompt(`name of ur device`);


var warrantyMonths3 = function (inMonths) {
    return inMonths * 12;
}


const mobileNameAndWarranty3 = (buyYear3, timeUsedInYears3, naam3) => {



    const warrantyTime3 = 2025 - buyYear3;
    const warrantyLeft3 = warrantyTime3 - timeUsedInYears3;

    var howMonths3 = warrantyMonths3(warrantyLeft3)
    if (howMonths3 > 0) {
        return `${naam3} warranty left only ${howMonths3} months`;
    }
    else if (howMonths3 <= 0) {
        return `${naam3} warranty is already expired`;
    }
}
const hi321 = mobileNameAndWarranty3(prompt(`enter buying year`), prompt(`enter how many years u used it`), prompt(`enter name of ur device`));
console.log(hi321);

// Class 8 to 9 - of - chapter2 - Challenge5
//i have done it this challenge in my challenge folder


// Class10 - of chapter2 - introduction to Array


var months = ["jan", "feb", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december",];
console.log(months[6]);
console.log(months.length);

const hello342 = "introvert";
const newly = [hello342, "danish", 2025 - 2007, months];
console.log(newly);

*/
// Class11 - of - chapter2 - Basic Array Operations

// 1. push();

const friends = ["jai", "aabid", "fan"];
const hi001 = friends.push("keyboard");
console.log(hi001);
console.log(friends);


// 2. unshift();

const hi0 = friends.unshift("mouse");
console.log(hi0);
console.log(friends);


// pop();

const hi2 = friends.pop();
console.log(hi2);
console.log(friends);


// shift();

const hi = friends.shift();
console.log(friends);
console.log(hi);


// class12 & 13 - of - chapter2 - Is a Challenge


// Class14 - of - Chapter2 - Introduction to Objects

var objectsExample = ["Danish", "Nisar", 2025 - 2007, "Game developer"];

var objectsRealUseCase = {
    firstName: "Danish",
    lastName: "Nisar",
    birthYear22: 2024,
    age: 2025 - 2007,
    profession: "Game Developer",
    favouriteCountry: "Japan"
}
console.log(objectsRealUseCase);


//  Class15 - of - chapter2 - Dot vs Bracket Notation


console.log(objectsRealUseCase.firstName);
console.log(objectsRealUseCase.age);
console.log(objectsRealUseCase["firstName"]);
const motupatlu = "Country";
console.log(objectsRealUseCase["favourite" + motupatlu]);



objectsRealUseCase.location = "kashmir";
objectsRealUseCase["preferredCompany"] = "Amazon";
console.log(objectsRealUseCase);

// Random Challenge

const things0 = ["Boat bluetooth", "Noise headset", "Airpods"];
console.log(`${objectsRealUseCase.firstName} has ${[things0.length]} bluetooth devices and his favourite one is ${things0[1]}`);


// Class16 - of - Chapter2 - Object Methods


const danish0 = {
    // calcAge: function (birthyear33) {
    //     return 2025 - birthyear33;
    // }
    birthYear223: 2007,
    calcAge: function () {
        this.age = 2025 - this.birthYear223
        return this.age;
    }
};
console.log(danish0.calcAge());
console.log(danish0.age);
console.log(danish0.age);
console.log(danish0.age);


// Class 17 to 18 - of - chapter2 - challenge7


// Class19 - of - chapter2 - Iteration Of For Loop

for (hi7 = 1; hi7 <= 100; hi7++) {
    console.log(`weight lifting repetations${hi7} 👊`);
};


// Class20 - of - chapter2 - Looping Arrays, Breaking and Continuing

const antSports = ["danish", "web developer", 2025 - 2007, ["jai", "suhail", "aabid"], "UAE"];
for (i = 0; i < antSports.length; i++) {
    if (typeof antSports[i] !== "string") continue;
    console.log(antSports[i], typeof antSports[i]);
}

console.log("----CONTINUE EXAMPLE-----");


const years = [1991, 2007, 1969, 2020];
const age = [];
for (let i = 0; i < years.length; i++) {
    age.push(2025 - years[i]);
}
console.log(age);


console.log("-----BREAK EXAMPLE-----");
for (i = 0; i < antSports.length; i++) {
    if (typeof antSports[i] !== "string") break;
    console.log(antSports[i]);
}

// Class21 - of - chapter2 - LoopingBackwards And Loops In Loops
for (i = antSports.length - 1; i >= 0; i--) {
    console.log(antSports[i]);
}



for (exercise = 1; exercise < 4; exercise++) {
    console.log(`------STARTING EXERCISE ${exercise}`);

    for (let a = 1; a <= 5; a++) {
        console.log(`LIFTING WEIGHT REPETATIONS 👆 ${a} `);
    }
}

// Class22 - of - chapter2 - While loop
let hero = 1;
while (hero <= 10) {
    console.log(`hello brother${hero}`);
    hero++;
}