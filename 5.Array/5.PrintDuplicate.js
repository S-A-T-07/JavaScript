// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      04/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

// Print Duplicate Element

duplicateArray = [10, 20, 10, 20, 11, 12];

for (let i = 0; i < duplicateArray.length; i++) {
  for (let j = i + 1; j < duplicateArray.length; j++) {
    if (duplicateArray[i] == duplicateArray[j]) {
      console.log(duplicateArray[i]);
      break;
    }
  }
}
