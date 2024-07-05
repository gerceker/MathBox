"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("./src");
var imaginer_number_1 = new src_1.ComplexNumber({
    real: 3,
    imaginer: 4,
});
var imaginer_number_2 = new src_1.ComplexNumber({
    real: 5,
    imaginer: 4,
});
var test = imaginer_number_1.sumWith(imaginer_number_2);
console.log(test);
