// class 1-4 of chapter1

// let js = 'amazing';
// if (js === 'amazing') alert('javascript is fun');

// console.log('hello world!');
// console.log("Danish Nisar Kumar");

// class5 - of chapter1 - values and variables

// let firstname = "Danish Nisar";
// console.log(firstname);
// let $Hell3o4 = "being human";
// console.log($Hell3o4);

// class7 - of chapter1 - Data Types

// console.log(typeof true);
// console.log(typeof "Danish");
// console.log(typeof 29);
// console.log(typeof false);

// let hello = 23;
// console.log(hello);

// hello = "Chingam Sir"
// console.log(hello);

// hello = true;
// console.log(hello);

// hello = "Dr jatka";
// console.log(hello);

// // class8 - of - chapter1 - let,const and var
// // in notes and in readme



// class9 - of - chapter1 - Basic Operators

// let presentYear = 2025;
// let dob = 2007;
// const ageDanish = presentYear - dob;
// const ageSarah = presentYear - 2007;
// // console.log((presentYear - dob) * 2 / 5 + 0.8);
// console.log(ageDanish);
// console.log(ageSarah);



// let two = "Danish";
// let three = "Nisar";
// console.log(two + " " + three);

// console.log(ageDanish > ageSarah);
// console.log(dob < presentYear);
// console.log(ageDanish < dob);

// console.log(ageDanish >= ageSarah);


// // class10 - of - chapter1 - Operator Precedense


// class14 - of - chapter1 - strings and templeate litreals


let firstName = "Danish Nisar";
let job = "game developer";
let presentYear = 2025;
let birthyear = 2007;

const bluetooth = "I'am " + firstName + ", a " + (presentYear - birthyear) + " years old " + job;

console.log(bluetooth);

const newBluetooth = `I'am ${firstName}, a ${presentYear - birthyear} years old ${job}`;
console.log(newBluetooth)

console.log(`just a regular string with backticks....`)


console.log(`string with
multiple
lines`);



console.log("string with \n\
multiple \n\
lines...");

// Class15 - of - chpater1 taking decisions if else statements

const age = 310000;
if (age >= 18) {
    console.log(`Dr.jatka can get drawing license`);
}
else {
    console.log(`Dr.jatks is ${18 - age} years youger to get license`);
}

// class18 - of - chapter1 Type conversion and coereion

const inputYear = "20";
console.log(inputYear + 10);

console.log(Number(inputYear) + 10);


const hello = "motu";
console.log(Number(hello));
console.log(typeof NaN);


// class19 - of - chapter1 - truthy and falsy statements


console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean("danish"));
console.log(Boolean(21));


const money = 0;
if (money) {
    console.log(`don't spend it all`);
}
else {
    console.log(`get a job broo..`);
}


let height;
if (height) {
    console.log(`😁 YAY! height is defined`);
}
else {
    console.log(`😒 height is undefined`);
}


// class20 - of - chapter1 - Equality Operators

const gaseetaram = 18;
if (gaseetaram === '18') {
    console.log(`mara bees saal ka tajurba hai`);
}

// const gaseetaram = 18;
// if (gaseetaram == '18') {
//     console.log(`mara bees saal ka tajurba hai`);
// }

const hey = prompt(`What is ur fav. no. ?`);
console.log(hey);

if (hey == 22) {
    console.log(`Cool😎 bro!`);
}

const hey1 = Number(prompt(`What is ur fav. no. ?`));
console.log(hey);

if (hey1 === 21) {
    console.log(`Cool😎 bro!`);
}

const chingamSir = prompt(`Kuch to likhoo broo...`);

if (chingamSir == 21) {
    console.log(`Hello 21`);
}
else if (chingamSir == 7) {
    console.log(`Hello 27`);
}
else if (chingamSir == "john") {
    console.log(`Tumhaa Kanoon ki ksm Ruk javoo..`);
}
else {
    console.log(`dafa gs....`);
}


const hey2 = prompt(`enter something broo...`);
if (hey2 !== 21) {
    console.log(`tick u`);
}

const hey3 = prompt(`enter something broo...`);
if (hey3 != 21) {
    console.log(`tick u`);
}


// class21 - of - chapter1 - Boolean Logic & Operators

// No_code_in_this_lecture_only_logic_so_only_readme_is_written


// Class22 - of - chapter1 - Logical Operators

const license2 = true;
const goodVision = false;

if (license2 && !goodVision) {
    console.log(`sahrah can drive`);
}
else {
    console.log(`sahrah cant drive`);
}


// Class - 23 & 24 - of - chapter1 - challenge3 completed


//  Class25 - of - chapter1 - The Switch Statement


let day = prompt(`Enter your day`)

switch (day) {
    case "monday": // day === 'monday'

        console.log('Plan course structure');

        console.log('Go to coding meetup');

        break;

    case 'tuesday':

        console.log('Prepare theory videos');

        break;

    case 'wednesday':

    case 'thursday':

        console.log('Write code examples');

        break;

    case 'friday':

        console.log('Record videos');

        break;

    case 'saturday':

    case 'sunday':

        console.log('Enjoy the weekend :D');

        break;

    default:

        console.log('Not a valid day!');

}

// Class26 - of - chapter1 - Statements and Expressions


/* here we just learn the difference between expressiond and statements only thing to remember from that lecture in future classes we have to learn more about this */



// Class27 - of -chapter1 - The Conditional Operator

const age3 = prompt(`Enter your age`)

age3 >= 18 ?
    console.log(`You can smoke ciggrates 🚬`) :
    console.log(`NO you can smoke ciggrates 🚬`)



