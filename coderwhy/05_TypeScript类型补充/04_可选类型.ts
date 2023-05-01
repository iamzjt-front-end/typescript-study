// point: x/y 对象类型
// {x: number, y: number, z: number}
function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

printPoint({x: 1, y: 3});
printPoint({x: 1, y: 3, z: 4});

export {}
