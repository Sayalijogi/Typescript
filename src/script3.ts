//Section - 1

//Variables and types
//Function and arrow functions

//Section - 2

//Advances types
//enums
//unions and intersection types
//type guards
//type aliases
//generics

//enum -- named const variables

//Numeric enum
//program 1

// enum Direction {
//     Up = 5,
//     Down,
//     Left,
//     Right
// }

// let myDirection:Direction = Direction.Up
// console.log(myDirection)
// console.log(Direction.Down) //2
// console.log(Direction.Left) //3
// console.log(Direction.Right) //4

// //Program 2

// enum Color {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE"
// }
// let myColor:Color = Color.Blue
// console.log(Color.Red)
// console.log(Color.Green)
// console.log(Color.Blue)

// //Program 3

// //Heterogeneous Enums

// enum Status {
//     Success = 200,
//     NotFound = "Not_Found",
//     Error ="Error"
// }
// let myStatus:Status = Status.Success
// console.log(Status.Success)

// //Program 4
// //enum with function
// enum logLevel {
//     Info = 1,
//     warning = 2,
//     Error = 3
// }

// function logMessage(message:string , a:logLevel){
//     console.log(`${message} ${a}`) //1
//     console.log(logLevel[a])
// }

// logMessage("this is info message",logLevel.Info)
// logMessage("this is info warning",logLevel.warning)
// logMessage("this is info message",logLevel.Error)

