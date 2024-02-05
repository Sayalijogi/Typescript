"use strict";
//enum
var Color;
(function (Color) {
    Color[Color["Red1"] = 0] = "Red1";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Blue1"] = 2] = "Blue1";
})(Color || (Color = {}));
if (Color.Blue1) {
    console.log("Blue Color");
}
else if (Color.Yellow) {
    console.log("Yellow Color");
}
else if (Color.Red1) {
    console.log("Red Color");
}
//any
let numberA = 10;
let numberB = [22, 33, 44];
//void
function additionCE() {
    console.log("hello");
    return true;
}
//null
let apiResponse = null;
//undefined
let firstNameNew = undefined;
//writing function with typescript
//function declaration
function additionJ(x, y) {
    console.log(x + y);
    return x + y;
}
let sum = additionJ(13, 45);
//function expression
let additionK = function (x, y) {
    return x + y;
};
let sum2 = additionK(24, 45);
//optional parameter 
function greet(name, greeting) {
    //greeting ----> undefined
    if (greeting) {
        console.log("greeting value was passed");
    }
    else {
        console.log("greeting value was not passed");
    }
}
greet("hello", "bye");
greet("bye");
//arrow function
