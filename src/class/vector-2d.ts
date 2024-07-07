export class Vector2D {

    i_factor:number;
    j_factor:number;

    constructor(i_factor,j_jfactor){
        this.i_factor = i_factor;
        this.j_factor = j_jfactor;
    }

    getAbsoluteValue(){
        return Math.sqrt(this.i_factor**2 + this.j_factor**2);
    }
    
}