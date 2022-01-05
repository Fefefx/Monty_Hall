export default class DoorModel {

    #number: number;
    #hasPresent: boolean;
    #selected: boolean;
    #open: boolean;

    constructor(number: number, hasPresent = false, selected = false, open = false){
        this.#number = number;
        this.#hasPresent = hasPresent;
        this.#selected = selected;
        this.#open = open;
    }

    get number() {
        return this.#number;
    }

    get hasPresent() {
        return this.#hasPresent;
    }

    get selected() {
        return this.#selected;
    }

    get open() {
        return this.#open;
    }

    get closed() {
        return !this.open;
    }

    markOff() {
        const selected = false;
        return new DoorModel(this.number, this.hasPresent, selected, this.open);  
    }

    toggleSelected() {
        const selected = !this.selected;
        return new DoorModel(this.number, this.hasPresent, selected, this.open);
    }

    openSelected() {
        const open = true;
        return new DoorModel(this.number, this.hasPresent, this.selected, open);
    }
}