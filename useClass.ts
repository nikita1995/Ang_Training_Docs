class ClassA {
   val: string = "Hi There";
    show(): void {
        console.log(this.val);
    }
}

function myFun() {
    console.log("this is my func");
}
var nation = console.log("Indian");
var obj = {
    ClassA,
    myFun,
    nation
}

export default obj; // instead of multiple export, we can use single export in this way