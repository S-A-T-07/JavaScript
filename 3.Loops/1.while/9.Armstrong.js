// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      27/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to check an 3 digit number is Armstrong number or not
//input = 123, 1^3+2^3+3^3 == 123 then it is Armstrong

const prompt = require('prompt-sync')({ sigint: true })
const input = prompt('Enter any number : ')
var num = Number(input)
var sum = 0


while (num > 0) {
    let lastDigit = num % 10
    sum += lastDigit ** 3
    num = Math.floor(num / 10)
}

console.log(`Sum of cubes of each digit of ${input}=${sum}`);
console.log(input==sum?"ARMSTRONG":"NOT AN ARMSTRONG");
