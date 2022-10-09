class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eating() {
    console.log("person eating");
  }
}

class Student extends Person {
  sno: number

  constructor(name: string, age: number, sno: number) {
    // super 调用父类的构造器
    super(name, age);
    this.sno = sno;
  }

  studying() {
    console.log('studying');
  }
  // 方法重写
  eating() {
    super.eating(); // 如果也想父类的方法执行一遍，可以用super去调用
    console.log("student eating");
  }
}

const stu = new Student('IamZJT', 10, 61);

console.log(stu.name);
console.log(stu.age);

stu.eating();

export {}
