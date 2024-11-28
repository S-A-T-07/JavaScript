// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                  22/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//                                                             Arithmetic Operators

//  - Modulus (%)

var x = 10
console.log(`${x} % 3 = ${x % 3}`);

var y = 12345
//print the last digit of y
console.log(`Last digit of ${y} = ${y % 10}`);

//  - Double Asterisks (**)

//to find the power of a number

console.log(`${x}^2 = ${x ** 2}`);

//                                                             Relational Operators
//                                                          (Always returns Boolean values)

console.log(`Is x greater than y : ${x > y}`);

z = '10'
console.log(`when x = ${x}(number)  & z= ${z}(string)`);
console.log(`is x equals z : ${x == z}`);

z = '14'
console.log(`when x = ${x}(number) & z= ${z}(string)`);
console.log(`is x equals z : ${x == z}`);

z = '10'
console.log(`when x = ${x}(number) & z= ${z}(string)`);
console.log(`is x equals z : ${x === z}`);

//                                                              Logical Operators
//                                                (To combine Realtional Expressions, Always returns Boolean)

w = 20
//check x is in b/w w & y
console.log(`Is x (x=${x}) is in between w (w=${w}) and y (y=${y}) : ${x < y && x > w}`);
