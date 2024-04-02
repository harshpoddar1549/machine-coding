/* In order to make anything private just add a # in front of them */
/* class OldRectangle {
    l = 0
    #b = 0
}

const r = new OldRectangle()

console.log(r.l) // 0
console.log(r.b) // undefined
// console.log(r.#b) // ERROR

 */
class NewRect {

    // Setup
    constructor (w, b, color) {
        console.log('Rectangle is being created!')

        this.width = w
        this.breadth = b
        this.color = color
    }

    // made it a private function
    #getArea () {
        return this.width * this.breadth
    }

    // public function
    getPeri(){
        return 2* (this.width * this.breadth)
    }
}


const r2 = new NewRect(2,3,'blue')
console.log(r2)
console.log(r2.getPeri())
// console.log(r2.getArea()) // ERROR