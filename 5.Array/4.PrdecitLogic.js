// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      04/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

// Predict the logic for the problem
// input    =   [4 , 5 , 6]             [7 , 8 , 9]             -
// output   =   [11, 10, 9]             [17, 16,15]

// Method1
// 4+5+6   = 15 => 15-4, 15-5, 15-6 => [ 11 , 10 ,9  ]
// 7+8+9   = 24 => 24-7, 24-8, 24-9 => [ 17 , 16 ,15 ]
console.log("-------------------------------------");
console.log("METHOD 1");
console.log("-------------------------------------");
input1 = [4, 5, 6];
output1 = [];
sum1 = 0;

input2 = [7, 8, 9];
output2 = [];
sum2 = 0;

for (value of input1) {
  sum1 += value;
}

for (value of input1) {
  output1.push(sum1 - value);
}
console.log(`Input1 = ${input1} => Output1 = ${output1}`);

for (value of input2) {
  sum2 += value;
}

for (value of input2) {
  output2.push(sum2 - value);
}

console.log(`Input2 = ${input2} => Output2 = ${output2}`);
console.log("-------------------------------------");
// Method2
// 5+6, 4+6, 4+5 => [ 11 , 10 ,9  ] Skipping the corresponding place's value
// 8+9, 7+9, 7+8 => [ 17 , 16 ,15 ] Skipping the corresponding place's value
console.log("METHOD 2");
console.log("-------------------------------------");

output1 = [];
output2 = [];
sum1 = 0;
for (index in input1) {
  sum = 0;

  for (i = 0; i < input1.length; i++) {
    if (i == index) {
      continue;
    } else {
      sum += input1[i];
    }
  }
  output1.push(sum);
}
console.log(`Input1 = ${input1} => Output1 = ${output1}`);

for (index in input2) {
  sum = 0;

  for (i = 0; i < input2.length; i++) {
    if (i == index) {
      continue;
    } else {
      sum += input2[i];
    }
  }
  output2.push(sum);
}

console.log(`Input2 = ${input2} => Output2 = ${output2}`);
