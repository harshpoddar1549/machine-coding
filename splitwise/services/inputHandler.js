import SplitWise from "../models/splitwiseApp.js"

const swObj = new SplitWise()

// it returns my paymentObject
/* 
paymentObject = {

    // Fixed things

    userMakingThePayment: ,
    amount: ,
    divisionMethod: ,
    divisionAmongHowMany: ,
    userIds: [],

    // variable keys
    exactAmoutArr = [] // for EXACT type
    percentageArr = [] // for PERCENT type
}

*/
const expenseQueryHandler = (expenseQuery) => {

    // EXPENSE u1 1000 4 u1 u2 u3 u4 EQUALS
    // EXPENSE u1 1250 2 u2 u3 EXACT 370 880
    // EXPENSE u4 1200 4 u1 u2 u3 u4 PERCENT 40 20 20 20
    const paymentObj = {}
    paymentObj["userMakingThePayment"] = expenseQuery[1]
    paymentObj["amount"] = parseInt(expenseQuery[2])
    paymentObj["divisionAmongHowMany"] = parseInt(expenseQuery[3])
    let i = 4
    const userIds = []
    while( i < (4 + paymentObj["divisionAmongHowMany"]) ){
        userIds.push(expenseQuery[i])
        i++
    } 
    paymentObj["userIds"] = userIds
    paymentObj["divisionMethod"] = expenseQuery[i]
    i++
    if(paymentObj["divisionMethod"] === "EXACT"){
        const exactAmountArr = []
        while(i<expenseQuery.length){
            exactAmountArr.push(parseInt(expenseQuery[i]))
            i++
        }
        paymentObj["exactAmountArr"] = exactAmountArr
    }
    if(paymentObj["divisionMethod"] === "PERCENT"){
        const percentageArr = []
        while(i<expenseQuery.length){
            percentageArr.push(parseInt(expenseQuery[i]))
            i++
        }
        paymentObj["percentageArr"] = percentageArr
    }

    return paymentObj

}


export const handleUserInput = (userInput) => {
    const userInputArr = userInput.split(" ")
    switch(userInputArr[0]){
        case "SHOW":
            if(userInputArr.length > 1){
                // do something else
                // userInputArr[1] would be my userId
                swObj.showBalanceSheetForAUser(userInputArr[1])
            }else{
                swObj.showBalancesForAll()
            };
            break;
        case "EXPENSE":
            // EXPENSE u1 1000 4 u1 u2 u3 u4 EQUALS
            // EXPENSE u1 1250 2 u2 u3 EXACT 370 880
            // EXPENSE u4 1200 4 u1 u2 u3 u4 PERCENT 40 20 20 20
            const paymentObj = expenseQueryHandler(userInputArr)
            swObj.registerAPayment(paymentObj)
            break;
        case "EXIT":
            break;
        default: console.log('Invalid Input. Please use SHOW, EXPENSE or EXIT as keywords')
    }
}