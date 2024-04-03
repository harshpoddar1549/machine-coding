import ParkingLot from "../models/parkingLot.js";
import Vehicle from "../models/vehical.js";

const pl = new ParkingLot()

export const handleUserInput = (userInput) => {
    // logic is implemented here
    const userInputArr = userInput.split(" ")
    const command = userInputArr[0]
    switch(command){
        case "create_parking_lot":
            // implement create_parking_lot funtion
            console.log("Parking lot created");
            //pl = new ParkingLot(userInputArr[1], parseInt(userInputArr[2]), parseInt(userInputArr[3]))
            pl.addIdAndFloors(userInputArr[1], parseInt(userInputArr[2]), parseInt(userInputArr[3]))
            console.log(pl)
            break;
        case "display":
            const secondCommand = userInputArr[1]
            if(secondCommand==="free_count"){
                pl.displayFreeCount(userInputArr[2])
            }else if(secondCommand === "free_slots"){
                // do something here
                pl.displayFreeSlots(userInputArr[2])
            };
            break;
        case "park_vehicle":
            const vehicleObj = new Vehicle(userInputArr[1], userInputArr[2], userInputArr[3])
            pl.parkAVehicle(vehicleObj)
            break;
        default:
            break;
    }
}