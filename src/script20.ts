//Program 1
function indentity(arg:number){
    return arg
}
let q9 = indentity(34)
console.log(q9)

//Program 2
function indentity2(arg:any){
    return arg
}
let A21 = indentity(23)
console.log(A21)

//Program 3
//T => number
//Y => String
function indentity3<T>(arg:T):T{
    return arg
}
let q12 = indentity3<number>(12)
let q13 = indentity3<String>("hello")
console.log(q12)
console.log(q13)

//Program 4
function indentity4<T>(arg1:T,arg2:T){
    if(typeof arg1 == 'number' && typeof arg2 == "number"){
        return arg1 + arg2
    }
    else if(typeof arg1 == "string" && typeof arg2 == "string"){
        return arg1 + arg2
    }
}
let a6 = indentity4<number>(13,4)
console.log(a6)
let ab = indentity4<string>("hello","hello")
console.log(ab)

//Program 5
interface LengthWise {
    length:number
}
function indentity5<T extends LengthWise>(arg:T):T{
    arg.length
    return arg
}
console.log(indentity5<string>("hello"))

//Program 6
class Boxe <T>{
    private varA:T
    constructor(a:T){
        this.varA = a
    }
    displayVarA():T{
        return this.varA
    }
}
let obj = new Boxe<string>("hello")
console.log(obj)
let obj2 = new Boxe<number>(1)
console.log(obj2)
let q21 = obj.displayVarA()
console.log(q21)
let q23 = obj.displayVarA()
console.log(q23)



