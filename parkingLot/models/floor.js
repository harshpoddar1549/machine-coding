import Slot from "./slot.js"

export default class Floor {
    constructor(_id, numOfSlots){
        this.id = _id
        this.numOfSlots = numOfSlots
        this.createAndAddSlots(numOfSlots)
    }

    createAndAddSlots(numOfSlots){
        let slotArr = []
        for (let i=0; i< numOfSlots; i++){
            let newSlot
            if(i==0){
                newSlot = new Slot('TRUCK', i+1)
            }else if(i==1 || i==2){
                newSlot = new Slot('BIKE', i+1)
            }else{
                newSlot = new Slot('CAR', i+1)
            }
            slotArr.push(newSlot)
        }
        console.log(slotArr)
        this.slotArr = slotArr
        
    }
}