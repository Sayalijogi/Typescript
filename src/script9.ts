//Program 1
interface PersonB {
    firstName:string;
    lastName:string;
    age:number
}

//Extended interface
interface EmployeeA extends PersonB {
    employeeId: number;
    role:string
}

let employeeQ: EmployeeA = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    employeeId:12,
    role:"Developer"
}

//Program 2

interface CalculatorB {
    //only signature
    addE(x:number, y:number):number;
    subE(x:number,y:number):number;
}

let Calc:CalculatorB = {
    addE(x,y) {
        return x + y
    },
    subE(x,y) {
        return x + y
    }
}

//Interface for function type
interface AdditionE {
    (x:number,y:number):number;
}
let addf:AdditionE = (x,y) => x+y

//Program 3
interface worldBank {
    save():number;
    loan():number;
}

class SBIa implements worldBank{

    save(){
        return 10
    }
    loan(){
        return 12
    }
    branchName(){
        return "nagpur"
    }
}

class PNB1 implements worldBank {
    save(){
        return 100
    }
    loan(){
        return 120
    }
    branchName(){
        return "pune"
    }
}

let a111 = new SBIa()
let a112 = new PNB1()

