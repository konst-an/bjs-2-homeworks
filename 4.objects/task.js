function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Иван", "мужской", 20);
let student2 = new Student("Ольга", "женский", 18);
let student3 = new Student("Максим", "мужской", 16);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

student1.setSubject("Русский язык");
student2.setSubject("Алгебра");
student3.setSubject("История");

Student.prototype.addMarks = function (...marks) {
  if ("marks" in this) {
    this.marks.push(...marks);
  }
}

student1.addMarks(3,4,5,4);
student2.addMarks(5,4,5,5);
student3.addMarks(5,4,4,4);

Student.prototype.getAverage = function () {
    if (("marks" in this) && this.marks.length !== 0) {
        let sum = this.marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum / this.marks.length;
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

student1.exclude("Отчислен в связи с переводом");