// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      23/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to print second largest number among 3 numbers and print them in ascending order

num1 = 2
num2 = 1
num3 = 30

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(`Second largest number is num2 = ${num2}`);
        console.log(`Ascending Order: ${num3},${num2},${num1}`);
    }
    else {
        console.log(`Second largest number is num3 = ${num3}`);
        console.log(`Ascending Order: ${num2},${num3},${num1}`);
    }
}
else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(`Second largest number is num1 = ${num1}`);
        console.log(`Ascending Order: ${num3},${num1},${num2}`);
    }
    else {
        console.log(`Second largest number is num3 = ${num3}`);
        console.log(`Ascending Order: ${num1},${num3},${num2}`);
    }
}
else {
    if (num2 > num1) {
        console.log(`Second largest number is num2 = ${num2}`);
        console.log(`Ascending Order: ${num1},${num2},${num3}`);
    }
    else {
        console.log(`Second largest number is num1 = ${num1}`);
        console.log(`Ascending Order: ${num2},${num1},${num3}`);
    }
}