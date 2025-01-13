// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      28/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to find GCD/HCF of 2 numbers


const prompt = require('prompt-sync')({ sigint: true })
const input1 = prompt('Enter the first number: ')
const input2 = prompt('Enter the second number: ')

var num1 = Number(input1)
var num2 = Number(input2)

var gcd = 1, temp

num1 < num2 ? temp = num1 : temp = num2

for (let i = 1; i <= temp; i++){
    if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
    }
}

console.log(`GCD (${num1},${num2}) = ${gcd}`);
