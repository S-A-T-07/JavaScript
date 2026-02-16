// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      04/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//check element 2 is in the given array or not
var numArray = [10, 11, 12, 2, 23, 45, 28, 58];
var search = 2;
var flag = false

for (index in numArray) {
  if (numArray[index] == search) {
      flag = true;
      break;
    }
    
}

console.log(flag?`Element is found at index ${index}`:"Number not found");
