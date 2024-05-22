import { Component } from "@angular/core";
import { Operations } from "./Arithmaticservice";
@Component({
    selector:'app-root',
    templateUrl:'./Main.html'
})
export class DiClass{
    num1:any;
    num2:any;
    addresult:any;
    subresult:any;
    mulresult:any;
    divresult:any;
    constructor(private op:Operations){}
    Calculation(a:any,b:any)
    {
        this.addresult="Addtion = "+this.op.Addition(a,b);
        this.subresult="Substraction = "+this.op.Substraction(a,b);
        this.mulresult="Multiplication = "+this.op.Multiplication(a,b);
        this.divresult="Division = "+this.op.Division(a,b);
    }

}