// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      23/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to swap 2 numbers
//input : x = 10 , y = 20
//after swapping, output : x = 20, y = 10

//Algorithm (Steps by step instructions)
//Step 1:  Create a temperory variable, temp
//Step 2: store the value of x in temp 
//Step 3: store the value of y in x
//Step 4: store the value of temp in y

var x = 10, y = 20, temp
console.log(`Before Swapping x = ${x}, y = ${y}`);

temp = y
y = x
x = temp
console.log(`After Swapping x = ${x}, y = ${y}`);
