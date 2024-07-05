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
    ComplexNumber.prototype.absolute = function () {
        var absolute_value = Math.sqrt((Math.pow(this.real, 2)) + (Math.pow(this.imaginer, 2)));
        return absolute_value;
    };
    ComplexNumber.prototype.conjugate = function () {
        return new ComplexNumber({
            real: this.real,
            imaginer: -this.imaginer
        });
    };
    ComplexNumber.prototype.multiplyWith = function (number) {
        var real = (number.real * this.real) - (number.imaginer * this.imaginer);
        var imaginer = (number.real * this.imaginer) + (number.imaginer * this.real);
        return new ComplexNumber({ real: real, imaginer: imaginer });
    };
    ComplexNumber.prototype.sumWith = function (number) {
        var real = number.real + this.real;
        var imaginer = number.imaginer + this.imaginer;
        return new ComplexNumber({ real: real, imaginer: imaginer });
    };
    return ComplexNumber;
}());
exports.ComplexNumber = ComplexNumber;
