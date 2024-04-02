// example of an object
/* 
const circle = {
    radius : 1,
    location: {
        x: 1,
        y: 1
    },
    draw: ()=>{
        console.log('draw')
    }
} */


// Two ways to create an object -> 
// 1. Factory function
// 2. Constructor function


// custome constructor 
// factory function
const createCircle = (x, y, r) => {
    return {
        radius : r,
        location: {
            x: x,
            y: y
        }
    }
}


/* 
const c1 = createCircle(1,2,4)
const c2 = createCircle(4,5,6)
 */

// Constructor Function
// naming convention
// Name starts with Caps letter

function Circle(radius){
    this.radius = radius
    this.draw = () => {
        console.log(`draw: ${this.radius}`)
    }
}

// new keywword creates and empty object and assigns value 23 to that.
// iF new is not used, `this` would refer to the global object which is the windows object
// if we miss using `this` keyword here, then we would be defining these properties and methods ( radius and draw )
// on the global object i.e. window instead of the Circle object.

const c1 = new Circle(23)
const c2 = new Circle(43)

console.log(c1.radius, c2.radius)
//console.log(c1.draw(), c2.draw())


// use delete operator to remove a certain property from the object
console.log("deleting draw from c1")

delete c1.draw

console.log("deleted draw from c1")
/* 
try{
  console.log(c1.draw())  
}catch(err){
    throw new Error("Damnnnn", err)
} */

// enumerating keys of the object

for (let key in c2){
    console.log(key, typeof c2[key])
    if(typeof c2[key] === 'function'){
        console.log(`Yeh toh function hai re baba!!`)
    }else{
        console.log(`simple cheee`)
    }
}


// in operator is here as well

if( 'radius' in c2 ){
    console.log("Got a radius")
}

if('draw' in c1){
    console.log(`Kuch toh galat hai Daya!!!`)
}

