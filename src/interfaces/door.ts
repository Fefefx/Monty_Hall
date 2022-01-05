import DoorModel from '../models/doorModel';

export default interface Door {
    value: DoorModel;
    onChange: (newDoor: DoorModel) => void
}