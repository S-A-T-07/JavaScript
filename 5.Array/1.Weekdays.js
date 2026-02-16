// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      02/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

const weekDays = ["Monday", "Tuesday", "Wednesday"]
console.log(weekDays);

console.log(`Type of weekDays : ${typeof (weekDays)}`);

console.log(`Total values of weekDays : ${weekDays.length}`);

console.log(`First item of weekDays : ${weekDays[0]}`);

console.log(`Last item of weekDays : ${weekDays[weekDays.length - 1]}`);

weekDays.push("Thursday")
weekDays.unshift("Sunday")
console.log(weekDays);

weekDays.pop()
console.log(`After using pop medthod: ${weekDays}`);

weekDays.shift()
console.log(`After using shift medthod: ${weekDays}`);

// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      04/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

console.log(`Display Array items one by one - normal for loop`);
for (let index = 0; index < weekDays.length; index++){
    console.log(weekDays[index]);
}

