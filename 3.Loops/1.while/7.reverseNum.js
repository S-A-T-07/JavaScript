// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      27/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to reverse a number
//input = 123
//output = 321

const prompt = require('prompt-sync')({ sigint: true })
const input = prompt('Enter any number : ')

var num = Number(input)
var reverseNumber = ""

while (num > 0) {
    let lastDigit = num % 10
    reverseNumber += lastDigit
    num=Math.floor(num/10)
}
console.log(`Reverse of ${input} = ${reverseNumber}`);
