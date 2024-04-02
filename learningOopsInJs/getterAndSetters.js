class Square {
    #length
    #breadth
    constructor(_width){
        this.#length = _width
        this.#breadth = _width
        this.numOfRequestForArea = 0 // When it's constructed there is no request to this
    }

    get length(){
        return this.#length
    }

    // defining getter 
    // this is a property but behaves like a method
    get area() {
        this.numOfRequestForArea++
        return this.#length * this.#breadth
    }

    // this is a method
    perimeter(){
        return 2* this.#length * this.#breadth
    }
    // defining setter
 
    set area(area) {
        this.#length = Math.sqrt(25)
        this.#breadth = this.#length
    }
}

let s1 = new Square(25)
// GETTER METHOD

// s1.area is not a function
// it behaves as if it's a method
// essentially it behaves as a property
console.log(s1.area) // 625

// SETTER METHOD

// here we are basically setting the value of property as 25 and inside that function we are
// setting lenght and breadth of the square
// or implementing any logic
s1.area = 25

console.log(s1.area)

console.log(s1.area)

console.log(s1.area)

console.log(s1.area)

console.log(s1.numOfRequestForArea)

console.log(s1.length)

//s1.breadth = 6
console.log(s1)
console.log(s1.breadth)