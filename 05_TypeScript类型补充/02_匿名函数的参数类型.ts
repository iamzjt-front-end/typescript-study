// 在通常情况下，在定义一个函数时，都会给参数加上类型注解的
function foo(message: string) {

}

const names = ['abc', 'cba', 'nba'];
names.forEach(function (item) {
  // item的类型是根据上下文环境推导出来的，这个时候可以不添加类型注解
  console.log(item.split('b'));
})
