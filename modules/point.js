"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PointModule = /** @class */ (function () {
    function PointModule(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(PointModule.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PointModule.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return PointModule;
}());
exports.PointModule = PointModule;
