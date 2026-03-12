var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Point2D = /** @class */ (function () {
    function Point2D(x1, y1) {
        this.x1 = x1;
        this.y1 = y1;
    }
    // shared helper (optional)
    Point2D.prototype.draw2D = function () {
        return this.x1 + ':' + this.y1;
    };
    return Point2D;
}());
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x1, y1, z1) {
        var _this = _super.call(this, x1, y1) || this;
        _this.z1 = z1;
        return _this;
    }
    Point3D.prototype.draw = function () {
        return this.draw2D() + ':' + this.z1;
    };
    return Point3D;
}(Point2D));
// const p1 = new Point2D(0, 0) // Error: Cannot create an instance of an abstract class
var p2 = new Point3D(1, 2, 3);
console.log(p2.draw());
