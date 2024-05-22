import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Operations } from "./Arithmaticservice";
import { DiClass } from "./MainComponent";
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[DiClass],
    bootstrap:[DiClass],
    providers:[Operations]
})
export class moduleclass{
    
}
