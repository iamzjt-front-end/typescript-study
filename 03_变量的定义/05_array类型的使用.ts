// 确定一个事实: names是一个数组类型，但是数组中存放的是什么类型的元素呢？
// 不好的习惯: 在数组中存放不同的数据类型是不好的习惯。
// 一个数组在TypeScript开发中，最好存放的数据类型是固定的。
// 类型注解: type annotation
const names1: Array<string> = []; // 不推荐
const names2: string[] = []; // 推荐

names1.push("abc");
// names1.push(123);

names2.push("abc");
