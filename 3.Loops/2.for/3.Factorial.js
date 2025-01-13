// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      28/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------
//w.a.p to find factorial of a number

const prompt = require('prompt-sync')({ sigint: true })
const input = prompt('Enter any number : ')

var num = Number(input)
var fact = 1
for (let i = 1; i <= num; i++){
    fact *= i
}

console.log(`${input}!=${fact}`);
