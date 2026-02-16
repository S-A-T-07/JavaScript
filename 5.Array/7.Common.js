// Print common numbers from the given arrays
a1 = [10, 11, 12, 20, 30]
a2 = [11, 20, 21, 30, 31]

for (let i = 0; i < a1.length; i++){
    for (value of a2) {
        if (a1[i] == value) {
            console.log(value);
        }
    }
}
