// ---------------------------------------------------------------------------------------------------------------------------------------------
//                                                                      30/08/24
// ---------------------------------------------------------------------------------------------------------------------------------------------

//w.a.p to check voting eligibility of a person


function votingEligibility(age) {
    return age>=18?"Eligible for voting":"Not eligible for voting"
}

console.log(votingEligibility(24))

console.log(votingEligibility(7))