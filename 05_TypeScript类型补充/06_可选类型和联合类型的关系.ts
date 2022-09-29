// 让一个参数本身是可选的
// 当一个参数本身是可选类型的时候，类似于: 这个参数是（类型|undefined）的联合类型
function foo(message?: string) {
  console.log(message);
}

function bar(value: string | undefined) {
  console.log(value);
}

foo('123');
bar(undefined);
