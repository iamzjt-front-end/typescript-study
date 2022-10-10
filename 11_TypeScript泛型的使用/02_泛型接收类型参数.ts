// 泛型可以接收多个类型参数
// 泛型实际上就是将类型参数化，让外界调用的时候决定到底使用什么类型
function foo<T, E>(arg1: T, arg2: E) {

}

foo<number, string>(20, 'IamZJT');
