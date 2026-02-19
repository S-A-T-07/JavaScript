// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      05/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------
//Linear or Sequential Search
//check element 2 is in the given array or not
var numArray = [10, 11, 12, 2, 23, 45, 28, 58];
var search = 2;
var flag = false
var count = 0

for (index in numArray) {
    count++;
    if (numArray[index] == search) {
        flag = true;
        break;
    }
    
}

console.log(`Total execution time : ${count}`);
console.log(flag ? `Element is found at index ${index}` : "Number not found");
