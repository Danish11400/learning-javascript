// Class 1-2 - of -chapter7 - How JS Woks Behind
"use strict";

// const hello =21;

// if (hello===21){
//     console.log("hello is 21");

// console.log(`hey my age is ${age}`);

// var age =18;

//     function add(a,b){

//         return a+b;



//     };

// };


//     console.log(add(2,3));


  
const jonas={
    year:2025,
    birthyear:2003,
    calcAge :function(){
        console.log(this);
        console.log(2025-this.birthyear);
    }
};
// jonas.calcAge();

  
const maltida={
   birthyear:2000,

};
maltida.calcAge=jonas.calcAge;
maltida.calcAge();
jonas.calcAge(); 



const  addexp= function(a,b){
    console.log(arguments);
    return a+b;
}

console.log(addexp(2,5,4,1));



