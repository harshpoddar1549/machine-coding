export default class Player{
    #currentPosition
    constructor(_name){
        this.#currentPosition = 0
        this.name = _name
    }

    move (value){
        const newPosition = value + this.#currentPosition
        if(newPosition <= 100){
            this.#currentPosition = newPosition
        }
        return this.#currentPosition
    }

    get position() {
        return this.#currentPosition
    }

    set position(value) {
        this.#currentPosition = value
    }
}

/* 
*/