//program 1

let multiple = (x:number,y:number): number => {
    console.log("Hello")
    return x * y
}
multiple(12,12)

//program 2

let additionnC = (x:number,y:number): number => x * y

//program 3
class PersonA {

    value: number = 42

    // display():string{
    //     console.log("hello")
    //     return "hello"
    // }

    // display1 = ():string=>{
    //     return "hello"
    // } 

}

// //program 4
//function declaration
function additionU(x:number,y:number):number {
    return x + y
}

//function expression
let additonJ = function(x:number,y:number):number {
    return x + y
}

//arrow function
let additionR = (x:number,y:number):number => {
    return x + y
}
let additionL = (x:number,y:number): number => x + y

class PersonQ {
    value: number = 2
    display(): string {
        return "hello"
    }
    additionZ = (x:number, y:number): number => {
        return x + y
    }
    additionK = (x:number,y:number): number => x + y
}

// //Interface
// //program 1
interface Persona {
    firstName:string
    lastName:string
    age:number
}

let ashu:Persona = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:24
}

// //Program 2
interface Signup {
    firstName:string,
    lastName:string
    age?:number
}

let amolK:Signup = {
    firstName:"amolK",
    lastName:"raok",
    age:12
}

//program 3
interface Point {
    readonly x:number,
    readonly y:number
}

let point : Point = {
    x:12,
    y:13
}

//point.x = 133

interface Point {
    readonly x: number;
    readonly y: number;
}

let points: Point = {
    x: 12,
    y: 2
};

console.log("Point:",points);