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
console.log(hi3)


// Class6 - of - chapter2 - Functions Calling Other Functions

var warrantyMonths = function (inMonths) {
    return inMonths * 12;
}


const mobileNameAndWarranty2 = (buyYear1, timeUsedInYears1, naam1) => {



    const warrantyTime1 = 2025 - buyYear1;
    const warrantyLeft1 = warrantyTime1 - timeUsedInYears1;

    var howMonths = warrantyMonths(warrantyLeft1)


    return `${naam1} warranty left only ${howMonths} months`;
}
const hi32 = mobileNameAndWarranty2(2023, 1.5, "poco m4 pro 5G");
console.log(hi32)






