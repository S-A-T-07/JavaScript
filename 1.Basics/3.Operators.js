// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      22/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//                                                                  Arithmetic Operators

//  - Modulus (%)

var x = 10
console.log(`${x} % 3 = ${x % 3}`);

var y = 12345
//print the last digit of y
console.log(`Last digit of ${y} = ${y % 10}`);

//  - Double Asterisks (**)

//to find the power of a number

console.log(`${x}^2 = ${x ** 2}`);

//                                                                  Relational Operators
//                                                              (Always returns Boolean values)

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

//                                                                      Logical Operators
//                                                  (To combine Realtional Expressions, Always returns Boolean)

w = 20
//check x is in b/w w & y
console.log(`Is x (x=${x}) is in between w (w=${w}) and y (y=${y}) : ${x < y && x > w}`);

// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      23/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//                                                          Increment or Decrement Operators

var a = 10
console.log('Post increment');
console.log(`a = ${a}`);
console.log(`a++ = ${a++}`);
console.log(`a = ${a}`);

var a = 10
console.log('Pre increment');
console.log(`a = ${a}`);
console.log(`++a = ${++a}`);
console.log(`a = ${a}`);

var a = 10
console.log('Post decrement');
console.log(`a = ${a}`);
console.log(`a-- = ${a--}`);
console.log(`a = ${a}`);

var a = 10
console.log('Pre decrement');
console.log(`a = ${a}`);
console.log(`--a = ${--a}`);
console.log(`a = ${a}`);

//                                                          Short hand Operators
//                (Used only when we have same variable to the immediate left and right side of the assignemnt operator(=))

var b = 20
console.log(`b = ${b}`);
b = b + 10
console.log(`b = b + 10 = ${b}`);

var c = 20
console.log(`c = ${b}`);
c += 10
console.log(`b = ${c} and b += 10 = ${c}`);

