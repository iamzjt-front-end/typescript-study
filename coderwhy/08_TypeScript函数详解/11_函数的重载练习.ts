// 我们现在有一个需求：定义一个函数，可以传入字符串或者数组，获取它们的长度。

// 方案一：使用联合类型来实现
// function getLength(a: string | any[]) {
//   return a.length;
// }

// 方案二：使用函数重载来实现
function getLength(a: string): number;
function getLength(a: any[]): number;
function getLength(a: any) {
  return a.length;
}
