// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                  21/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//                                                                  Variables
console.log(firstData, typeof firstData);
var firstData                               //Hoisiting is happening

var firstData = 100
console.log(firstData, typeof firstData);
var firstData = 'JS'
console.log(firstData, typeof firstData);

// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                  22/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

const secondData = "const vaariable" //Hoisting is not supported - Error (ReferenceError: Cannot access 'secondData' before initialization)
console.log(secondData);

// secondData = 100 -   Error (TypeError: Assignment to constant variable.)

var i = 10

// Here we combine different data types using Temperal literals

console.log(`Before loop, i = ${i}`); //10
console.log(`Inside loop`); 
for (let i = 1; i <= 5;i++){
    console.log(i);
}

console.log(`After loop, i = ${i}`); //10

var i = 10
console.log(`Before loop, i = ${i}`); //10
console.log(`Inside loop`); 
for (var i = 1; i <= 5;i++){
    console.log(i);
}

console.log(`After loop, i = ${i}`); //6


let j = 10
console.log(j);//Hoisting is not supported - Error (ReferenceError: Cannot access 'j' before initialization)

console.log(`Variables are firstData = ${firstData}, secondData = ${secondData} and i = ${i}`);
