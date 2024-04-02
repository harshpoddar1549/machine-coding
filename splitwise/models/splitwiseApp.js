import User from "./user.js"

export default class SplitWise {
    constructor(){
        this.users = {}, // {userId: userObj}
        this.currentId = 1
    }

    addUser(userId) {
        //const newUserId = 'u' + this.currentId
        const userObj = new User(userId)
        this.users[userId] = userObj
        //this.currentId++
        return
    }

    doUserExists(userId){
        if(userId in this.users){
            return true
        }
        return false
    }

    showBalancesForAll(){
        // implement this logic
        if(Object.keys(this.users).length === 0){
            console.log(`No Balances!`)
            return
        }
        for (let user in this.users){
            this.users[user].showBalanceSheet()
        }
    }

    showBalanceSheetForAUser(userId){
        // implement this logic
        if(this.doUserExists(userId)){
            this.users[userId].showBalanceSheet()
            return
        }
        console.log("No Balances!")
        return
    }

    registerAPayment(paymentObj){
        // implement the logic here
        /* 
            paymentObject = {

                // Fixed things

                userMakingThePayment: ,
                amount: ,
                divisionMethod: ,EQUALS | EXACT | PERCENT
                divisionAmongHowMany: ,
                userIds: [],

                // variable keys
                exactAmoutArr = [] // for EXACT type
                percentageArr = [] // for PERCENT type
            }

        */

        if(!this.doUserExists(paymentObj["userMakingThePayment"])){
            this.addUser(paymentObj["userMakingThePayment"])
        }
        switch(paymentObj["divisionMethod"]){
            case "EQUAL":
                // do something here
                this.registerAnEqualPayment(paymentObj)
                break;
            case "EXACT":
                // do something here
                this.registerAnExactPayment(paymentObj)
                break;
            case "PERCENT":
                // do something here
                this.registerAPercentageBasedPayment(paymentObj)
                break;
            default: 
                break;
        }
    }

    registerAnEqualPayment(paymentObj){
        const userIdOfUserMakingThePayment = paymentObj["userMakingThePayment"]
        const userObj = this.users[userIdOfUserMakingThePayment]
        const sharePerUser = parseInt(paymentObj["amount"] / paymentObj["divisionAmongHowMany"])
        for(let userId of paymentObj["userIds"]){
            if(userId!=userObj.id){
                userObj.updateBalanceSheet(userId, sharePerUser)
            }
        }
    }

    registerAnExactPayment(paymentObj){
        const userIdOfUserMakingThePayment = paymentObj["userMakingThePayment"]
        const userObj = this.users[userIdOfUserMakingThePayment]
        for (let i = 0; i < paymentObj["userIds"].length; i++){
            const userId = paymentObj["userIds"][i]
            if(userId!=userObj.id){
                userObj.updateBalanceSheet(userId, paymentObj["exactAmountArr"][i])
            }
        }
    }

    registerAPercentageBasedPayment(paymentObj){
        const userIdOfUserMakingThePayment = paymentObj["userMakingThePayment"]
        const userObj = this.users[userIdOfUserMakingThePayment]
        for (let i = 0; i < paymentObj["userIds"].length; i++){
            const userId = paymentObj["userIds"][i]
            if(userId!=userObj.id){
                const userShare = parseInt((paymentObj["amount"] * paymentObj["percentageArr"][i]) / 100)
                userObj.updateBalanceSheet(userId, userShare)
            }
        }
    }
}