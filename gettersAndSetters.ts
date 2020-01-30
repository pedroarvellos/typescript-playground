class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    } 

    set x(value) {
        this._x = value;
    }

    set y(value) {
        this._y = value;
    } 
}

let point: Point = new Point(0, 0)
console.log(point.x)
point.x = 1;
console.log(point.x)