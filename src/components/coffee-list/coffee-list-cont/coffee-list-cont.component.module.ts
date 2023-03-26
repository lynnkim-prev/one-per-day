import { NgModule } from "@angular/core";
import { CoffeeListContComponent } from "./coffee-list-cont.component";
import { CoffeeListPresComponentModule } from "../coffee-list-pres/coffee-list-pres.component.module";

@NgModule({
  imports: [CoffeeListPresComponentModule],
  declarations: [CoffeeListContComponent],
  exports: [CoffeeListContComponent]
})

export class CoffeeListContComponentModule {
}
