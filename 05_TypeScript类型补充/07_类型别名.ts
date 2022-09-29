// type 用于定义类型别名
type IDType = number | string | boolean;

function printID(id: IDType) {
  console.log(typeof id);
}

printID(11);
printID('aa');
printID(true);

// 对象类型
type PointType = {
  x: number,
  y: number,
  z?: number
}

function printPoint(point: PointType) {
  console.log(point);
}

printPoint({
  x: 0,
  y: 1
})
printPoint({
  x: 11,
  y: 22,
  z: 33
})
