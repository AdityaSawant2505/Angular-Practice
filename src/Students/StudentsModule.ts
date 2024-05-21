import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { StudentsClass } from "./StudentsComponent";
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[StudentsClass],
    bootstrap:[StudentsClass]
})
export class StudentsModuleClas{
    
}