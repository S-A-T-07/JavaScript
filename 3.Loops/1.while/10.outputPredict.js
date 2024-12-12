// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      27/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

// predict the output of given input
//input =        2              3                   4               5
//logic1 =     2 x 12        3 x 123             4 x 1234        5 x 12345
//output=       24            369                 4936              ?

const prompt = require('prompt-sync')({ sigint: true })
const input = prompt('Enter the number of times it needs to print : ')

var num = Number(input)

var i = 1
var str = ""

while (i<=num) {
    str += i
    i++
}

console.log(`
    input  = ${input}
    output = ${str*input}`);
