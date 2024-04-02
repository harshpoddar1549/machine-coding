// Use this whenever we have a generic class and we wanna extend it's behaviour to other classes
// also to have the sub classes give the capability to add more features or update the behaviour of 
// pre existing methods, etc

// Let's have a look down below

// Generic Class 
class Person {
    constructor (_name, _age){
        this.name = _name
        this.age = _age
    }

    describe(){
        console.log(`I am ${this.name} and I am ${this.age} years old.`)
    }
}

// Sub Class
class Programmer extends Person {
    constructor (_name, _age, _yearsOfExp) {
        super(_name, _age) // calling the Parent constructor
        this.yearsOfExp = _yearsOfExp // custome Behaviour
    }

    // can update the pervious functions from Parent
    describe () {
        console.log(`Damn I changed this here`)
    }

    code () {
        console.log(`${this.name} is coding!`)
    }
}

const programmers = [
    new Programmer('Dom', 45, 13),
    new Programmer('Harry', 46, 7),
    new Programmer('Jack', 78, 34)
]

function developeSoftware(programmers){
    // Develop Software
    // let ... of ... in case of an array to access elements of an array
    // let ... in ... in case of an object to access keys of the object 
    for (let programmer of programmers){
        programmer.code()
    }
}

developeSoftware(programmers)