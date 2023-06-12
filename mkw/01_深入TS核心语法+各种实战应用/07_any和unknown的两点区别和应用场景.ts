// ! any 和 unknown 在开发中和第三方包源码底层经常看到，弄清楚它们的区别很重要。

// * 相同点：any 和 unknown 可以是任何类的父类，所以任何类型的变量都可以赋值给 any 类型或 unknown类型的变量。

// - 不同点1：any 也可以是任何类的子类，但 unknown 不可以，所以any 类型的变量都可以赋值给 其他类型的变量。
let a: any = 1;
let b: number = a;
let c: unknown = 1;
// let d: number = c; // 报错

// - 不同点2：不能拿 unknown 类型的变量来获取任何属性和方法，但 any 类型的变量可以获取任意名称的属性和任意名称的方法。
let e: unknown = 1;
// e.toFixed(); // 报错
let f: any = 1;
f.toFixed();

// + any 比较典型的应用场景：1.自定义守卫  2.需要进行 as any 类型断言的场景
// export function isRef(r: any): r is Ref {
//   return Boolean(r && r.__v_isRef === true); // any类型的 r 参数在函数内部获取属性
// }

// + unknown 一般作为函数参数：用于接收任意类型的参数，但在函数内部只用于再次传递或输出场景，不获取属性的场景。
// function ref(value?: unknown): Ref {
//   return createRef(value); // 函数内部只用于再次传递或输出场景，不获取属性的场景。
// }
