"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumComplexNumbers = exports.multiplyComplexNumbers = exports.ArithmeticSequence = exports.ComplexNumber = void 0;
var complex_number_1 = require("./class/complex-number");
Object.defineProperty(exports, "ComplexNumber", { enumerable: true, get: function () { return complex_number_1.ComplexNumber; } });
var arithmetic_sequence_1 = require("./class/arithmetic-sequence");
Object.defineProperty(exports, "ArithmeticSequence", { enumerable: true, get: function () { return arithmetic_sequence_1.ArithmeticSequence; } });
//functions
var multiply_imaginer_numbers_1 = require("./functions/multiply-imaginer-numbers");
Object.defineProperty(exports, "multiplyComplexNumbers", { enumerable: true, get: function () { return multiply_imaginer_numbers_1.multiplyComplexNumbers; } });
var sum_imaginer_numbers_1 = require("./functions/sum-imaginer-numbers");
Object.defineProperty(exports, "sumComplexNumbers", { enumerable: true, get: function () { return sum_imaginer_numbers_1.sumComplexNumbers; } });
