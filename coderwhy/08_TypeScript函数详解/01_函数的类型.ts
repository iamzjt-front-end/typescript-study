function foo() {

}

type FooFnType = () => void;

function bar(fn: FooFnType) {
  fn();
}

bar(foo);

// 定义常量时，函数的类型
type AddFnType = (num1: number, num2: number) => number;

const add: AddFnType = (num1: number, num2: number) => {
  return num1 + num2;
}

add(1, 2);
