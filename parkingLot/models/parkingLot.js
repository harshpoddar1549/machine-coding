import Floor from "./floor.js"
import Vehicle from "./vehical.js"

export default class ParkingLot{
    /* constructor(){
         //this.floorObjArr = 
    } */

    addIdAndFloors(_id, _floors, _slotsPerFloor){
        this.id = _id
        this.numFloors = _floors
        this.slotsPerFloor = _slotsPerFloor
        this.createAndAddFloor(this.numFloors, this.slotsPerFloor)
    }

    createAndAddFloor(numOfFloors, slotsPerFloor){
        const floorArr = []
        for (let i=0; i<numOfFloors; i++){
            const floor = new Floor(i+1, slotsPerFloor)
            floorArr.push(floor)
        } 
        this.floorArr = floorArr 
    }

    displayFreeCount(vehicleType){
        for (let floor of this.floorArr){
            let count = 0
            for (let slot of floor.slotArr){
                if(slot.type === vehicleType && slot.status === "available"){
                    count++
                }
            }
            console.log(`No of Free slots for ${vehicleType} on Floor ${floor.id}: ${count}`)
        }
    }

    displayFreeSlots(vehicleType){
        for (let floor of this.floorArr){
            let availSlotIds = []
            for (let slot of floor.slotArr){
                if(slot.type === vehicleType && slot.status === "available"){
                    availSlotIds.push(slot.id)
                }
            }
            console.log(`Free slots for ${vehicleType} on Floor ${floor.id}: ${availSlotIds.join(',')}`)
        }
        return
    }

    parkAVehicle(vehicleObj){
        
        const floorAndSlotObj = this.findAnAvailableSlot(vehicleObj.type) 
        if(floorAndSlotObj === -1){
            console.log(`Parking Lot Full`)
            return
        }
        const ticketId = [this.id,floorAndSlotObj.floor.id, floorAndSlotObj.slot.id].join("_") 
        floorAndSlotObj.slot.park(vehicleObj, ticketId)
        console.log(`Parked vehicle. Ticket ID: ${ticketId}`)
    }

    findAnAvailableSlot(type){
        // return { floor: , slot: }
        for (let floor of this.floorArr){
            for( let slot of floor.slotArr){
                if(slot.type === type && slot.status==="available"){
                    return { floor: floor, slot: slot }
                }
            }
        }
        return -1
    }
}