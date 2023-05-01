// 函数参数注解：num1: number, num2: number
// 返回值注解：(): number
// 在开发过程中，通常可以不写返回值的类型 (自动推导)
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

sum(1, 2);
