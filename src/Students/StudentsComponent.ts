import { Component } from "@angular/core";
import { students } from "./StudentsModel";
@Component({
    selector:'app-root',
    templateUrl:'./Students.html'
})
export class StudentsClass{
    s = new students("","","","","","","","");
    StudenData:any=[];
    index:any=-1;
    btnstatus=false;
    Calculation(x:any,y:any,z:any) {
        this.s.total=Number(x)+Number(y)+Number(z);
        this.s.percenatge=(this.s.total/3).toFixed(2);
        if(this.s.percenatge < 35 )
            {
                this.s.rsult="Fail";
            }
        else{
            this.s.rsult="Pass";
        }
    }
    AddStudents(p:any) {
        this.StudenData.push(p);
        this.ClearData();
    }

    Display(e:any,i:any){
        //console.log(e);
        this.s=new students(e.rno,e.name,e.english,e.maths,e.science,e.total,e.percenatge,e.rsult);
        this.index=i;
        this.btnstatus=true;
    }
    UpdateStudents(e:any){
        this.StudenData[this.index]=e;
        this.ClearData();
        this.index=-1;
    }

    Delete(i:any){
        this.StudenData.splice(i,1);
        alert("Student deleted Successfully");
    }
    ClearData(){
        this.s=new students("","","","","","","","");
        this.btnstatus=false;
    }
}