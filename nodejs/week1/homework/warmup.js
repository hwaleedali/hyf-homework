console.log("Warmup File");
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    return this.radius * 2;
  }
  getCircumference() {
    return this.radius * 2 * Math.PI;
  }
  getArea() {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}
const circle = new Circle(10);
console.log(circle.getDiameter()); // 20
console.log(circle.getCircumference()); // 62.832
console.log(circle.getArea()); // 314.159
const circle1 = new Circle(20);
console.log(circle1.getDiameter()); // 40
console.log(circle1.getCircumference()); // 125.663
console.log(circle1.getArea()); // 1256.637
