//Unions
//Example 1

let variable:number | string;
variable = "hello"
variable = 10

//Example 2
function displayResult(value:number|string):void{
    if(typeof value == 'number'){
        console.log("The value number type")
    }
    else {
        console.log("The value is string type")
    }
}
displayResult(12)
displayResult("hello")

//Example 3

type CarR = {
    brand:string ;
    model:string;
}
type ElectricCar = {
    batteryType:string
}

type HybridType = CarR & ElectricCar
type HybridTypeB = Car | ElectricCar

const carB:HybridType = {
    brand:"polo",
    model:"q4",
    batteryType:"al"
}

let carC:HybridTypeB = {
    batteryType:"al2"
}
// let carD:HybridTypeB = {
//     brand:"q6",
//     model:"a4"
// }

//Example 4

type logger = {
    log:(input:string)=>void
}

type formatter = {
    format:(input:string) =>string;
}

type logFormatter = logger & formatter
let lodD:logFormatter = {
    log:function(message){
        console.log("Hello")
    },
    format:function(input){
        console.log(input)
        return "Hello Js"
    }
}

//Example 5
type Age = number
let userAge:Age = 23;

type PersonC = {
    name:string,
    age:number;
    email?:string
}

let personA:PersonC = {
    name:"chinmay",
    age:24
}

