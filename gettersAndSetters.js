var Point = /** @class */ (function () {
    function Point(xValue, yValue) {
        this.xValue = xValue;
        this.yValue = yValue;
    }
    Object.defineProperty(Point.prototype, "XValue", {
        get: function () {
            return this.xValue;
        },
        set: function (value) {
            this.xValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "YValue", {
        get: function () {
            return this.yValue;
        },
        set: function (value) {
            this.yValue = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(0, 0);
console.log(point.XValue);
point.XValue = 1;
console.log(point.XValue);
