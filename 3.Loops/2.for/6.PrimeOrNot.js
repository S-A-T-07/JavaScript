// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      28/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to check a number is prime or not

const prompt = require('prompt-sync')({ sigint: true })
const input = prompt('Enter any Number: ')
var num = Number(input)
var isPrime = true

for (let i = 2; i < num; i++){
    if (num % i == 0) {
        isPrime = false
        break;
    }
}

console.log(num == 1 ? "1 is neither a Prime nor a Composite Number." : isPrime ? `${num} is a Prime Number.` : `${num} is not a Prime Number.`);

