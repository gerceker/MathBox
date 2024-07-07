import {ComplexNumber,multiplyComplexNumbers} from './src';

var complex_1 = new ComplexNumber({real:1,imaginer:2})
var complex_2 = new ComplexNumber({real:6,imaginer:2})
var complex_3 = new ComplexNumber({real:4,imaginer:3})


async function main() {
    console.log(await multiplyComplexNumbers([complex_1,complex_2,complex_3]));
}

main();
