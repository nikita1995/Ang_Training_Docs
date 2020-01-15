//To demo Type Assertion

var strNum:number = 7;
var num: string;
num = <string> <any> strNum;

console.log("num=" +num);
console.log("strNum=" +strNum);