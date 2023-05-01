// 泛型 -> 将类型参数化
// 在定义函数时，不决定参数的类型
// 而是让调用者以参数的形式告知
function sum<T>(num1: T): T {
  return num1;
}

// 调用方式1：明确的传入类型
sum<number>(10);
sum<{ name: string }>({ name: 'IamZJT' });
sum<any[]>([]);

// 调用方式2：类型推导
sum(50);
