// tuple: 元组 多种元素的组合
// 'why' 18 1.88
// const info: any[] = ['why', 18, 1.88]

// 1. 数组的弊端（没办法确定拿到的数据类型）
// const name = info[0];
// console.log(name.length);

// 2. 元组
const info: [string, number, number] = ['why', 18, 1.88];
const name = info[0];

console.log(name.length);

export {}
