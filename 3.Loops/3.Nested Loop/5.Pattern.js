// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      29/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//Print the below pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4

for (row = 1; row <= 4; row++){
    var rowContent = ""
    for (col = 1; col <= row; col++){
        rowContent += row + " "
    }
    console.log(rowContent);
    
}
