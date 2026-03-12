interface IShape {
    area():number;
    describe():void;
}

// concrete product
class Circle1 implements IShape {
    private radius: number = 0;
    constructor(radius:number){
        this.radius = radius;
    }
    area(): number {
        return this.radius * this.radius * Math.PI;
    }
    describe(): void {
        console.log(`this is a circle with area ${this.area()}`);
    }
}

//abstract creator
abstract class ShapeCreator {
    abstract createShape(): IShape;
    describe(): void {
        const createdShape = this.createShape();
        createdShape.describe();
    }
}

// concrete creator
class CircleCreator extends ShapeCreator {
    createShape(): IShape {
        return new Circle1(5);
    }
}

//client

function main1():void {
    let creator: ShapeCreator;
    creator = new CircleCreator();
    creator.describe();
}
main1();