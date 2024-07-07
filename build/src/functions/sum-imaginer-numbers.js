"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumComplexNumbers = sumComplexNumbers;
require("syncforeachloop");
var complex_number_1 = require("../class/complex-number");
function sumComplexNumbers(complexnumber) {
    return new Promise(function (resolve, reject) {
        var result = new complex_number_1.ComplexNumber({
            imaginer: complexnumber[0].imaginer,
            real: complexnumber[0].real
        });
        complexnumber.syncForEach(function (number, nextNumber, i) {
            if (i == 1)
                return nextNumber();
            result.sumWith(number);
            nextNumber();
        }, function () {
            resolve(result);
        });
    });
}
