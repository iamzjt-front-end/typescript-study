class Student {
  static time: string = '2022-10-09 17:43'

  static attendClass() {
    console.log('去学习~');
  }
}

console.log(Student.time);
Student.attendClass();
