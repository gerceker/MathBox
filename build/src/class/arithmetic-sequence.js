"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArithmeticSequence = void 0;
var ArithmeticSequence = /** @class */ (function () {
    function ArithmeticSequence(options) {
        this.sequence = [];
        this.start = options.start;
        this.difference = options.difference;
    }
    ArithmeticSequence.prototype.getArray = function (length) {
        for (var i = 1; i <= length; i++) {
            this.sequence.push(this.start + this.difference * (i - 1));
        }
        return this.sequence;
    };
    ArithmeticSequence.prototype.sum = function (n) {
        console.log(this.sequence);
        var summation = (n * (2 * this.start + this.difference * (n - 1))) / 2;
        return summation;
    };
    return ArithmeticSequence;
}());
exports.ArithmeticSequence = ArithmeticSequence;
