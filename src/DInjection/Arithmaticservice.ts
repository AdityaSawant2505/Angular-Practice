import { Injectable } from "@angular/core";
@Injectable()
export class Operations{
    Addition(a:any,b:any){
        var c = Number(a)+Number(b);
        return c;
    }
    Substraction(a:any,b:any){
        var c = Number(a)-Number(b);
        return c;
    }

    Multiplication(a:any,b:any){
        var c = Number(a)*Number(b);
        return c;
    }

    Division(a:any,b:any){
        var c = Number(a)/Number(b);
        return c;
    }
}
