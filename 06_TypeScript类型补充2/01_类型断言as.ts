// 类型断言 as
// 转成具体类型 --> 缩小类型范围
// const el = document.getElementById("why") as HTMLImageElement;

// el.src = "url地址";

class Person {

}

class Student extends Person {
  study() {

  }
}

function sayHello(p: Person) {
  (p as Student).study();
  console.log(p);
}

const stu = new Student();
sayHello(stu);
