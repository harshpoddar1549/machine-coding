/// In case of JS objects, polymorphism can be acheived by Method overriding
// Act of redefining a method in derived child class 

class Animal {
    constructor(_name){
        this.name = _name
    }

    makeSounds () {
        console.log(`generic animal sound`)
    }
}

class Dog extends Animal{
    constructor (_name){
        super(_name)
    }

    makeSounds() {
        // I can also call the parent class methods inside of my derived class using super keyword
        console.log("being called from child class, ",)
        super.makeSounds()
        console.log(`Woof! Woof!`)
    }
}

const dog1 = new Dog("Jack")

dog1.makeSounds()
