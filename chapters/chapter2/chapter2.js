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

