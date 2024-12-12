// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      27/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

// predict the output of given input
//input =        2              3                   4               5
//logic2 =     2 + 22        3+33+333         4+44+444+4444     5+55+555+5555+55555
//output=       24            369                 4936              ?

const prompt = require('prompt-sync')({ sigint: true })
const input = prompt('Enter the number of times it needs to print : ')

var num = Number(input)

var i = 1
var str = ""
var sum = 0

while (i<=num) {
    str += num
    sum += Number(str)
    i++;
}

console.log(`input  = ${input}
output = ${sum}`);