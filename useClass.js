"use strict";
exports.__esModule = true;
var ClassA = /** @class */ (function () {
    function ClassA() {
        this.val = "Hi There";
    }
    ClassA.prototype.show = function () {
        console.log(this.val);
    };
    return ClassA;
}());
function myFun() {
    console.log("this is my func");
}
var nation = console.log("Indian");
var obj = {
    ClassA: ClassA,
    myFun: myFun,
    nation: nation
};
exports["default"] = obj; // instead of multiple export, we can use single export in this way
