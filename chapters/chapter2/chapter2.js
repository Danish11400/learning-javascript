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


// Class7 - of - chapter2 - Function Reviewing


// let buyYear3 = prompt(`enter buying year`);
// let timeUsedInYears3 = prompt(`how many years u used it`);
// let naam3 = prompt(`name of ur device`);


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
    else if (buyYear3 !== typeof number && timeUsedInYears3 !== typeof number) {
        return `enter valid data only in maths`
    }
    else if (howMonths3 <= 0) {
        return `${naam3} warranty is already expired`;
    }
}
const hi321 = mobileNameAndWarranty3(prompt(`enter buying year`), prompt(`enter how many years u used it`), prompt(`enter name of ur device`));
console.log(hi321);










