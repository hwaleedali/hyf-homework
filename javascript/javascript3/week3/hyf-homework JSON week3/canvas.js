console.log("Circle");

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    (this.x = x),
      (this.y = y),
      (this.r = r),
      (this.startAngle = startAngle),
      (this.endAngle = endAngle),
      (this.fillColor = fillColor);
  }
  draw() {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle
      //   this.fillColor
    );
    // ctx.stroke();
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "yellow");
// c1.draw();

let randomX = Math.random() * 600;
let allCircles = [];
let createCircle = function (circle) {
  circle.draw();
};

for (let i = 0; i < 5; i++) {
  let randomX = Math.random() * 600;
  let randomY = Math.random() * 650;

  let c2 = new Circle(randomX, randomY, 20, 0, 2 * Math.PI, "yellow");
  allCircles.push(c2);
  createCircle(allCircles[i]);
}
const timeInterval = setInterval(() => {
  let allCircles = [];
  let createCircle = function (circle) {
    circle.draw();
  };

  for (let i = 0; i < 5; i++) {
    let randomX = Math.random() * 600;
    let randomY = Math.random() * 650;
    let color =
      "rgba(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      ".5" +
      ")";

    let c2 = new Circle(randomX, randomY, 20, 0, 2 * Math.PI, color);
    allCircles.push(c2);
    createCircle(allCircles[i]);
  }
}, 100);
