// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      28/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//display numbers whose exponent is in the given range
//8<=num**exponent<=36
//display num
//exponent=2
//output= 3,4,5,6

const prompt = require('prompt-sync')({ sigint: true })
const input = prompt('Enter any exponent : ')

var exp = Number(input)

const low = 8
const up = 36

var num = 1
while (num <= up) {
    if (low <= num ** exp && num ** exp <= up) {
        console.log(num);
    }
    num++
}