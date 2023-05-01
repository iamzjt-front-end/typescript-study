// 1. 类型断言 as 转成具体类型 --> 缩小类型范围
// const el = document.getElementById("why") as HTMLImageElement;
// el.src = "url地址";

// 2. 对象继承
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

// 3. 了解 as any/unknown
const message = 'Hello World';
const num: number = message as any; // (message as any) as number
