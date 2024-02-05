"use strict";
//Unions
//Example 1
let variable;
variable = "hello";
variable = 10;
//Example 2
function displayResult(value) {
    if (typeof value == 'number') {
        console.log("The value number type");
    }
    else {
        console.log("The value is string type");
    }
}
displayResult(12);
displayResult("hello");
const carB = {
    brand: "polo",
    model: "q4",
    batteryType: "al"
};
let carC = {
    batteryType: "al2"
};
let lodD = {
    log: function (message) {
        console.log("Hello");
    },
    format: function (input) {
        console.log(input);
        return "Hello Js";
    }
};
let userAge = 23;
let personA = {
    name: "chinmay",
    age: 24
};
