import { numberLoop } from 'numberloop';
export class ArithmeticSequence{

    sequence:number[] = [];

    constructor (options:{
        start:number,
        difference:number,
        length:number
    }){
        for (let i = 1; i <= options.length; i++) {
            this.sequence.push(options.start + options.difference*(i-1));
        }
    }

    getArray(){
        return this.sequence;
    }

}