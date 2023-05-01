class Person {
  // 只读属性可以在构造器中赋值，但是赋值之后就不能修改了
  name: string = ''
  readonly friend?: Person

  constructor(name: string, friend?: Person) {
    this.name = name;
    friend && (this.friend = friend);
  }
}

const p = new Person('IamZJT', new Person('coderwhy'));
console.log(p.name);
// p.name = '123';

console.log(p.friend);
