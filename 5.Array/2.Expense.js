// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      04/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//Find the output
var expense = [23000, 34000, 12000, 56000, 43000, 27000, 68000];
//1. Display least expense
let least = expense[0];
for (let value of expense) {
  if (value < least) {
    least = value;
  }
}
console.log(`Least expense: ${least}`);

//2. Display highest expense
let high = expense[0];
for (let value of expense) {
  if (value > high) {
    high = value;
  }
}
console.log(`Highest expense: ${high}`);

// 3. Display total expense
var sum = 0;
for (let value of expense) {
  
    sum+= value;
}
console.log(`Total expense: ${sum}`);

