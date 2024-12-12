// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      27/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to find factorial of a number
//4! = 1 x 2 x 3 x 4

const prompt = require('prompt-sync')({ sigint: true })
const input = prompt('Enter any number : ')
var num = Number(input)

var fact = 1

while (num > 0) {
    fact *= num
    num--
}
console.log(`Factorial of ${input} = ${fact}`);
