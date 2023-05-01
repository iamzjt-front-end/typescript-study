class Person {
  private _name: string

  // 访问器 setter/getter
  // setter
  set name(newName) {
    this._name = newName;
  }
  //getter
  get name() {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }
}

const p = new Person("why");

p.name = 'IamZJT';
console.log(p.name);

export {}
