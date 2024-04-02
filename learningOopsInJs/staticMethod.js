// A static method don't need an instance of a class to be created
// they can't be accessed via object
// they can be accessed only directly via the class Name

// Static methods are sort of like a helper function.

// in order to create a static method use `static` keyword

class Square{
    constructor (_width){
        this.width = _width
        this.height = _width
    }

    static equals(a, b) {
        return a.width* a.height === b.width * b.height
    }

    static isValidDimensions(width, height) {
        return width === height
    }
}

let s1 = new Square(8)
let s2 = new Square(8)

// calling a static method
// it doesn't require an object
// it can be directly called from the Class

console.log(Square.equals(s1, s2)) 
console.log(Square.isValidDimensions(7,5))

