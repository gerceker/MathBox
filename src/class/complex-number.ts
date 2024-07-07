import {imaginer_number} from '../type/imaginer-number';

export class ComplexNumber{

    real:number;
    imaginer:number;

    constructor(imaginer_number:imaginer_number){
        this.real = imaginer_number.real;
        this.imaginer = imaginer_number.imaginer;
    }

    toString(): string{
        return `${this.real} + ${this.imaginer}i`;
    }

    getAbsoluteValue(): number{
        let absolute_value = Math.sqrt((this.real ** 2) + (this.imaginer ** 2));
        return absolute_value;
    }

    conjugate() : void {
        this.imaginer=-this.imaginer       
    }
    
    multiplyWith(number:ComplexNumber):void{
        var real = (number.real * this.real) - (number.imaginer*this.imaginer);
        var imaginer = (number.real*this.imaginer) + (number.imaginer*this.real);
        this.real= real;
        this.imaginer = imaginer;
    }

    sumWith(number:ComplexNumber):void{
        this.real = number.real+this.real;
        this.imaginer = number.imaginer+this.imaginer;
    }

}