//enum

enum Color {
    Red1,
    Yellow,
    Blue1
}

if(Color.Blue1){
    console.log("Blue Color")
}
else if(Color.Yellow){
    console.log("Yellow Color")
}
else if(Color.Red1){
    console.log("Red Color")
}

//any
let numberA:number = 10;
let numberB:any = [22,33,44];

//void
function additionCE():any{
    console.log("hello")
    return true
}

//null
let apiResponse:null = null;
//undefined
let firstNameNew:undefined = undefined

//writing function with typescript


//function declaration

function additionJ(x:number,y:number){
    console.log(x+y)
    return x + y
}
let sum = additionJ(13,45)

//function expression
let additionK = function(x:number,y:number){
    return x + y
}
let sum2 = additionK(24,45)

//optional parameter 
function greet(name:string , greeting?:string){
    //greeting ----> undefined
    if(greeting){
        console.log("greeting value was passed")
    }
    else {
        console.log("greeting value was not passed")
    }
}
greet("hello","bye")
greet("bye")

//arrow function
