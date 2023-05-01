class Person {
  protected name: string = 'IamZJT'
}

class Student extends Person {
  getName() {
    return this.name
  }
}

// 在外部访问不到
// const p = new Person();
// console.log(p.name);

// 可以在子类中访问到
const s = new Student();
console.log(s.getName());

export {}
