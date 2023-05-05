// Every file in node is a module by default
// Modules are encapsulated codes (Only share minimum)
// By using module we can only provide things that we want to use we cam avoid sharing private info

const {Jay,Rahul} = require("./02_Name.js");
const sayHi = require("./03_Util.js")
// console.log(Names);

sayHi("Arman");
sayHi(Jay);
sayHi(Rahul);