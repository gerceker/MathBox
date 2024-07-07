import 'syncforeachloop';
import { ComplexNumber } from "../class/complex-number";

export function multiplyComplexNumbers(complexnumber:ComplexNumber[]) {
    return new Promise<ComplexNumber>((resolve, reject) => {

        var result = new ComplexNumber({
            imaginer:complexnumber[0].imaginer,
            real:complexnumber[0].real
        })

        complexnumber.syncForEach(function (number:ComplexNumber,nextNumber,i) {
            if (i == 1) return nextNumber();
            result.multiplyWith(number);
            nextNumber();
        },() => {
            resolve(result);
        });
    
    })
}