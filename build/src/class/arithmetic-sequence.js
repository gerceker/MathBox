"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArithmeticSequence = void 0;
var ArithmeticSequence = /** @class */ (function () {
    function ArithmeticSequence(options) {
        this.sequence = [];
        for (var i = 1; i <= options.length; i++) {
            this.sequence.push(options.start + options.difference * (i - 1));
        }
    }
    ArithmeticSequence.prototype.getArray = function () {
        return this.sequence;
    };
    return ArithmeticSequence;
}());
exports.ArithmeticSequence = ArithmeticSequence;
