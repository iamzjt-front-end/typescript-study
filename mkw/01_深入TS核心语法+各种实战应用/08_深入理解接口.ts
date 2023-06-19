// * 接口: 另一种定义对象类型的类型
interface Product {
  name: string;
  price: number;
  account: number;
  buy(): void;
}

let p: Product = {
  name: "",
  price: 20,
  account: 9,
  buy() {
    this.account--;
  }
};

// * 继承接口: 新的接口只是在原来接口继承之上增加了一些属性和方法, 这时候就用接口继承
interface Pet {
  name: number;
  love: number;
  health: number;
  toHealth(): void;
}

interface Dog extends Pet {
  strain: string;
}
