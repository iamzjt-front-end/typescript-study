// 当进行一些类型断言 as any
// 在不想给某些JavaScript变量添加具体的数据类型时(跟原生的JavaScript代码是一样的)
let message: any = "abc";

message = 123;
message = true;
message = {

}

function foo(payload: any) {
  console.log(payload);
}

foo(123);
foo("abc");
foo(null);

console.log(message);
