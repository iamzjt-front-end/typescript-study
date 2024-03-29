enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('左');
      break;
    case Direction.RIGHT:
      console.log('右');
      break;
    case Direction.TOP:
      console.log('上');
      break;
    case Direction.BOTTOM:
      console.log('下');
      break;
    default:
      break;
  }
}

turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);
turnDirection(Direction.TOP);
turnDirection(Direction.BOTTOM);

export {};
