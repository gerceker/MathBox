"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexNumber = void 0;
var ComplexNumber = /** @class */ (function () {
    function ComplexNumber(imaginer_number) {
        this.real = imaginer_number.real;
        this.imaginer = imaginer_number.imaginer;
    }
    ComplexNumber.prototype.toString = function () {
        return "".concat(this.real, " + ").concat(this.imaginer, "i");
    };
    ComplexNumber.prototype.getAbsoluteValue = function () {
        var absolute_value = Math.sqrt((Math.pow(this.real, 2)) + (Math.pow(this.imaginer, 2)));
        return absolute_value;
    };
    ComplexNumber.prototype.conjugate = function () {
        this.imaginer = -this.imaginer;
    };
    ComplexNumber.prototype.multiplyWith = function (number) {
        var real = (number.real * this.real) - (number.imaginer * this.imaginer);
        var imaginer = (number.real * this.imaginer) + (number.imaginer * this.real);
        this.real = real;
        this.imaginer = imaginer;
    };
    ComplexNumber.prototype.sumWith = function (number) {
        this.real = number.real + this.real;
        this.imaginer = number.imaginer + this.imaginer;
    };
    return ComplexNumber;
}());
exports.ComplexNumber = ComplexNumber;
