export class ArithmeticSequence{

    sequence:number[] = [];
    start:number;
    difference:number;

    constructor (options:{
        start:number,
        difference:number,
        length:number
    }){
        this.start = options.start;
        this.difference = options.difference;
    }

    getArray(length:number){
        for (let i = 1; i <= length; i++) {
            this.sequence.push(this.start + this.difference*(i-1));
        }
        return this.sequence;
    }

    sum(n:number){
        console.log(this.sequence);
        var summation = (n*(2*this.start + this.difference*(n-1)))/2  
        return summation;
    }
    
}