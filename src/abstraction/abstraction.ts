//shapes Area permimeter
//simple single function to calculate area and perimeter of shapes.
//calculateTotalArea

interface Shape {
    area(): number;
    perimeter(): number;
}

class Circle implements Shape {
    constructor(public radius: number) { }
    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) { }
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

function calculateTotalArea(shape: Shape): number {
    return shape.area();
}

// client code
let circle = new Circle(5);
let rectangle = new Rectangle(4, 6);
console.log("Circle Area:", calculateTotalArea(circle));
console.log("Rectangle Area:", calculateTotalArea(rectangle));