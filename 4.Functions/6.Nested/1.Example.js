// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      02/09/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

const global = "GLOBAL VARIABLE"

const parentFunction = () => {
    const parentData = "PARENT VARIABLE"
    console.log(`Inside parentFunction, parent data is '${parentData}' and globaldata is '${global}'`);
    return () => {
        const childData = "CHILD VARIABLE"
        console.log(`Inside childFucntion, child data is '${childData}', parent data is '${parentData}' and global data is ${global}  `);
        
    }
}

const childFunction = parentFunction();
childFunction();

console.log("OR");

parentFunction()();//parnetfunction and childfunction is called
