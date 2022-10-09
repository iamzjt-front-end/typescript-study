function makeArea(shape: Shape) {
  return shape.getArea();
}

// 抽象方法必须要在抽象类中, 抽象类不能被实例化
abstract class Shape {
  abstract getArea();
}

class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  private r: number;

  constructor(r: number) {
    super();
    this.r = r;
  }

  getArea() {
    return this.r * this.r * 3.14;
  }
}

const rectangle = new Rectangle(20, 30);
const circle = new Circle(3);

const result1 = makeArea(rectangle);
const result2 = makeArea(circle);

console.log(result1);
console.log(result2);