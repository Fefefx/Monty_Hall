import DoorModel from "../models/doorModel";

export function createDoors(amount: number, doorWithPresent: number): DoorModel[] {
    return Array.from({length: amount}, (_,i)=> {
        const num = i+1;
        const hasPresent = num === doorWithPresent;
        return new DoorModel(num, hasPresent);
    });
}

export function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
        const equalsModified = currentDoor.number === modifiedDoor.number;
        if (equalsModified) {
            return modifiedDoor;
        } else {
            return modifiedDoor.open ? currentDoor : currentDoor.markOff();
        }
    });
}