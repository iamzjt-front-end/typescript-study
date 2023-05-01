// 函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载
function add(num1: number, num2: number): number; // 没函数体
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): any {
  return num1 + num2;
}

const result1 = add(20, 30);
console.log(result1, typeof result1);

const result2 = add('30', '30');
console.log(result2, typeof result2);

// add({ name: "why" }, { age: 18 });
// 必须要匹配到重载函数，实现函数不能被调用，相当于是一个入口

export {}

