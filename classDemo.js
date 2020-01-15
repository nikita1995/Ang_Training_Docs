var Student = /** @class */ (function () {
    function Student(name, no) {
        this.stud_name = name;
        this.mob_no = no;
    }
    Student.prototype.show_details = function () {
        console.log(this.stud_name);
        console.log(this.mob_no);
    };
    return Student;
}());
var obj1 = new Student('Niki', 9834442073);
obj1.show_details();
