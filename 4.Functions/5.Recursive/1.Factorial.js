// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      02/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to find factorial of a number

const factorial = (num) => {
    if (num == 1 || num == 0)
        return 1

    return num * factorial(num - 1)
}

console.log(factorial(4));
