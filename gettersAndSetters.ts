class Point {
    constructor(private xValue?: number, private yValue?: number) {
    }

    get XValue() {
        return this.xValue;
    }

    get YValue() {
        return this.yValue;
    } 

    set XValue(value) {
        this.xValue = value;
    }

    set YValue(value) {
        this.yValue = value;
    } 
}

let point: Point = new Point(0, 0)
console.log(point.XValue)
point.XValue = 1;
console.log(point.XValue)