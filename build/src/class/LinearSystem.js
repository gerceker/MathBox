"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearSystem = void 0;
require("syncforeachloop");
var variables = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
];
var LinearSystem = /** @class */ (function () {
    function LinearSystem(equations) {
        this.matrix = [];
        equations.syncForEach(function (equation, next_equation) {
            var equation = equation.replace(/\s+/g, '');
            var equation_chars = equation.split('');
            equation_chars.syncForEach(function (char, next) {
                console.log(char);
                next();
            });
        });
    }
    return LinearSystem;
}());
exports.LinearSystem = LinearSystem;
