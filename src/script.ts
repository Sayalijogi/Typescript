let x:number = 10

// program 1
function addition(x:number , y:number){
    return x + y
}
let q1 = addition(1,4)

// program 2

function additionB(x:number , y:number):number{
    return x + y
}
let q2 = additionB(1,4)

// program 3

function additionC(x:number , y:number):void{
    console.log( x + y)
}
additionB(1,4)

// program 4 
function additionD(x:number,y:number,avail:boolean,msg:string){
    if(avail){
        console.log(`${msg} ${x+y} `)
    }
}
additionD(12,3,true,"The addition of two numbers")


// program 5
let numbers:number [] = [11,22,33,44,55]
let names :string[] = ["chinmay","deshpande","shirish"]
let info :[string,number,number] = ["chinmay",23,45] 
let info2:[string , number , boolean] = ["chinmay",34,true]

// program 6

let info6 = {
    firsName:"chinmay",
    lastName:"deshpande"
}

let info7:{firstName:string,lastName:string,age:number};
info7 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:12
}

// 

// Manager , manager , MaNager

enum Roles {
    admin,
    customer,
    support,
    manager
}

if(Roles.admin){
    console.log("I am admin ")
}
else if (Roles.manager){
    console.log("I am manager")
}
else if (Roles.customer){
    console.log('I am customer')
}
else if(Roles.support) {
    console.log("I am at support")
}
