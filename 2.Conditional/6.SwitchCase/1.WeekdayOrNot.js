// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      26/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

// w.a.p to print "week day" for all weekdays and "holiday" for saturday and sunday

const prompt = require('prompt-sync')({ sigint: true }) //syntax, to import the package to file

const day = prompt(`Enter any week day (in small letters) : `)
// console.log(day, typeof(day));

switch (day) {
    case 'monday':
        console.log("This is a WeekDay");
        break;
    case 'tuesday':
        console.log("This is a WeekDay");
        break;
    case 'wednesday':
        console.log("This is a WeekDay");
        break;
    case 'thursday':
        console.log("This is a WeekDay");
        break;
    case 'friday':
        console.log("This is a WeekDay");
        break;
    case 'saturday':
        console.log("This is a Holiday");
        break;
    case 'sunday':
        console.log("This is a Holiday");
        break;
    default:
        console.log("Try with another day!!!");
}

console.log("Task completed!!!");
