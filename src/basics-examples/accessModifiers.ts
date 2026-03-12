class Point2D {
    constructor(protected x1: number, protected y1: number) { }

    draw(): string {
        console.log(this.x1 + ':' + this.y1)
        return this.x1 + ':' + this.y1
    }
}

class Point3D extends Point2D {
    constructor(x1: number, y1: number, public z1: number) {
        super(x1, y1)
    }
    draw(): string {
        return this.x1 + ':' + this.y1 + ':' + this.z1
    }
}

// const p1 = new Point2D(0, 0)

const p2 = new Point3D(1, 2, 3);
console.log(p2.draw())
// console.log(p2);
