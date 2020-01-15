class Student {
    stud_name: string;
    mob_no: number;

    constructor(name, no) {
        this.stud_name = name;
        this.mob_no = no;
    }
    show_details() {
        console.log(this.stud_name);
        console.log(this.mob_no);
    }
}

let obj1 = new Student('Niki', 9834442073);
obj1.show_details();