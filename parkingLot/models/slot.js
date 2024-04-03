export default class Slot{
    constructor(_type, _id){
        this.type = _type
        this.status = "available"
        this.ticketId = ""
        this.id = _id
    }

    park(vehicleObj, ticketId){
        this.ticketId = ticketId
        this.status = "na"
        this.vehicle = vehicleObj
    }
}