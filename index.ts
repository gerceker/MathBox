import {ComplexNumber} from './src';

var imaginer_number_1 = new ComplexNumber({
    real:3,
    imaginer:4,
});

var imaginer_number_2 = new ComplexNumber({
    real:5,
    imaginer:4,
});

var test = imaginer_number_1.sumWith(imaginer_number_2);

console.log(test);
