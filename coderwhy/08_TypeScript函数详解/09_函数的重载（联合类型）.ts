// 通过联合类型有两个缺点：
// 1.进行很多的类型缩小（类型缩小）
// 2.返回值的类型依然不能确定
function add(a1: number | string, a2: number | string) {
  if(typeof a1 === "number" && typeof a2 === "number") {
    return a1 + a2;
  } else if (typeof a1 === "string" && typeof a2 === "string") {
    return a1 + a2;
  }

  // return a1 + a2;
}

add(10, 20);
