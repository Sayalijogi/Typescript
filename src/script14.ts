//Program 1

type Result = string | number
let value:Result;
value = "Hello"
value = 10
console.log(value)

//Program 2
//Intersection Type

type PersonS = {
    name:string
    age:number
};

type EmployeeS = {
    jobTitle:string;
    salary:number
}

type EmployeeSPersonS = PersonS & EmployeeS;

let chinmayK:EmployeeSPersonS ;

chinmayK = {
    name:"chinmay",
    age:34,
    jobTitle:"manager",
    salary:12300
}

//Program 3

type Shape = {color:string};
type Circle = Shape & {radius:number} //color and radius
type Square = Shape & {sideLength:number}; //color and sideLength
type shapeUnion = Circle | Square
type shapeIntersection = Circle & Square

let r1:Shape;
let r2:Circle;
let r3:Square
let r4:shapeUnion
let r5:shapeIntersection

r4 = {
    color:"red",
    radius:34
}
r4 = {
    color:"green",
    sideLength:23
}

r5 = {
    color:"blue",
    radius:34,
    sideLength:34
}

//Program 4

type Car = {color:string}
type Truck = Car & {container:string}
type Bus = Car & {passenger:number}
type CTB = Car & Truck & Bus
type CTBU = Car | Truck | Bus

let k:CTB = {
    color:"red",
    container:"big",
    passenger:3
}
let k1:CTBU = {
    color:"red"
}
let k2:CTBU = {
    color:"red",
    container:"big"
}
let k3:CTBU = {
    color:"blue",
    passenger:3
}

