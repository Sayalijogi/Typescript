//Program 1

let myVariable:number|string ;
myVariable = 10
myVariable= "chinmay"

//Program 2

function displayData(data:string | number):void{
    console.log(data)
}
displayData(13)
displayData("chinmay")

//Program 3

function displayDataThree(data:string|number|boolean):void{
    console.log(data)
}
displayDataThree("hello")
displayDataThree(23)
displayDataThree(true)

//Program 4

let info9:{firstName:string,lastName:string,age:number|string} = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:'34'
}

//Program 5

let info10:(string|number) [] = ["chinmay","deshpande",12] 
// intersection
type Persone = {
    namee:string;
    age:number
}

type Employee = {
    employeeId:string,
    position:string
}

type EmployeePerson =  Persone & Employee
let info11:EmployeePerson = {
    namee:"chinmay",
    age:13,
    employeeId:"34",
    position:"hello"

}