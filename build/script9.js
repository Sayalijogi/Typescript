"use strict";
let employeeQ = {
    firstName: "chinmay",
    lastName: "deshpande",
    age: 34,
    employeeId: 12,
    role: "Developer"
};
let Calc = {
    addE(x, y) {
        return x + y;
    },
    subE(x, y) {
        return x + y;
    }
};
let addf = (x, y) => x + y;
class SBIa {
    save() {
        return 10;
    }
    loan() {
        return 12;
    }
    branchName() {
        return "nagpur";
    }
}
class PNB1 {
    save() {
        return 100;
    }
    loan() {
        return 120;
    }
    branchName() {
        return "pune";
    }
}
let a111 = new SBIa();
let a112 = new PNB1();
