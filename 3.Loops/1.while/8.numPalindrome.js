// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      27/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to check a number is palindrome or not
//input = = reverseNumber = 121, then it is palindrome else its not palindrome

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
console.log(input == reverseNumber ? "PALINDROME" : "NOT A PALINDROME");
