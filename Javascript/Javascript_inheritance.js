class Person{
    constructor(fName, lName,age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }   

    showDetails(){
         return `${this.fName} ${this.lName} having age: ${this.age}`;
    } 

    print(){
        console.log("Print method");
    }
}

class Student extends Person{
    constructor(fName, lName,age, courseId){
        super(fName, lName, age);   // call parent class constructor     
        this.courseId = courseId;         
    }

    showDetails(){
        console.log(super.showDetails());// call parent class method
        return `${this.fName} ${this.lName} having age: ${this.age} enrolled in course: ${this.courseId}`;
    }
}

var studentObj = new Student("Sudha", "Agarwal", 30, 1234);
console.log(studentObj.showDetails());

studentObj.print();