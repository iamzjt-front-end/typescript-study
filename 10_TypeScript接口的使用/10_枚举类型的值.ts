// 枚举类型有对应的默认值，也可以改值
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM = 100
}

function turnDirection(direction: Direction) {
  console.log(direction);
}

turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);

export {};
