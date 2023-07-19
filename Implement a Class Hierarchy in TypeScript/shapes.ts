// Implement a class hierarchy in typescript

// Define the base class Shape
abstract class Shape {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  abstract getArea(): number;
}

// Define the derived class Circle
class Circle extends Shape {
  radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Define the derived class Rectangle
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// Create an instance of Circle and calculate its area
const circle = new Circle("red", 5);
console.log("Circle Area:", circle.getArea());

// Create an instance of Rectangle and calculate its area
const rectangle = new Rectangle("blue", 4, 6);
console.log("Rectangle Area:", rectangle.getArea());
