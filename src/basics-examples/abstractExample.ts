abstract class Point2D {
    constructor(protected x1: number, protected y1: number) { }

    // shared helper (optional)
    protected draw2D(): string {
        return this.x1 + ':' + this.y1;
    }

    // must be implemented by derived classes
    abstract draw(): string;
}

class Point3D extends Point2D {
    constructor(x1: number, y1: number, public z1: number) {
        super(x1, y1)
    }

    draw(): string {
        return this.draw2D() + ':' + this.z1;
    }
}

// const p1 = new Point2D(0, 0) // Error: Cannot create an instance of an abstract class

const p2 = new Point3D(1, 2, 3);
console.log(p2.draw())