function foo() {
  return 123;
}

function bar() {
  return "abc";
}

let flag = true;
let result: unknown;

if (flag) {
  result = foo();
} else {
  result = bar();
}
console.log(result);

// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型
// 上述这么做的目的是：unknown，未知类型的数据不要拿到别处去随便用
let res1: any;
let res2: unknown;

// let message1: string = res1;
// let num1: number = res1;
// let message2: string = res2;
// let num2: number = res2;

export {}
