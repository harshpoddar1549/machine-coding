export default class User{
    constructor (_id){
        this.id = _id,
        this.balanceSheetPerUser = {} //{ u2 : 500, u3 : 700 }
    }

    get balanceSheet(){
        return this.balanceSheetPerUser
    }

    updateBalanceSheet(userId, amount){
        if( userId in this.balanceSheetPerUser ){
            this.balanceSheetPerUser[userId] += amount
        }else{
            this.balanceSheetPerUser[userId] = amount
        }
    }

    showBalanceSheet(){
        for (let user in this.balanceSheetPerUser){
            console.log(`${user} owes ${this.id}: ${this.balanceSheetPerUser[user]}`)
        }
    }
}