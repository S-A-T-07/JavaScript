// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      23/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to swap 2 numbers
//input : x = 10 , y = 20
//after swapping, output : x = 20, y = 10

//Algorithm (Steps by step instructions)
//Step 1: x +=y (x=30)
//Step 2: y=x-y (y=10)
//Step 3: x-=y (x=20)


var x = 10, y = 20
console.log(`Before Swapping x = ${x}, y = ${y}`);

x += y
y = x - y
x -= y
console.log(`After Swapping x = ${x}, y = ${y}`);
