// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      23/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to print 'fizz' if number is divisible by 3, 'buzz' if divisible by 5 and 'fizzbuzz' if divisible by 15

var num = 45

if (num % 15 == 0) {
    console.log("fizzbuzz");
}

else if (num % 5 == 0) {
    console.log("buzz");
}

else if (num % 3 == 0) {
    console.log("fizz");
}
else {
    console.log("Try with another number");
    
}