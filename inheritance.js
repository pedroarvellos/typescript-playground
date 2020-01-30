var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasePerson = /** @class */ (function () {
    function BasePerson() {
    }
    BasePerson.prototype.sayMyName = function () {
        console.log(this.name);
    };
    ;
    return BasePerson;
}());
var RealPerson = /** @class */ (function (_super) {
    __extends(RealPerson, _super);
    function RealPerson(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.sayMyName();
        return _this;
    }
    ;
    return RealPerson;
}(BasePerson));
var realPerson = new RealPerson('Pedro');
