import { NgModule } from "@angular/core";
import { CoffeeListContComponent } from "./coffee-list-cont.component";
import { CoffeeListPresComponentModule } from "../coffee-list-pres/coffee-list-pres.component.module";
import {
  AsyncPipe,
  CommonModule
} from "@angular/common";
import { EffectsModule } from "@ngrx/effects";
import { CoffeeEffects } from "../../../store/coffee/coffee.effects";
import { StoreModule } from "@ngrx/store";
import { coffeeReducer } from "../../../store/coffee/coffee.reducer";

@NgModule({
  imports: [
    CoffeeListPresComponentModule,
    AsyncPipe,
    StoreModule.forFeature('coffees', coffeeReducer),
    EffectsModule.forFeature([CoffeeEffects]),
  ],
  declarations: [CoffeeListContComponent],
  exports: [CoffeeListContComponent]
})

export class CoffeeListContComponentModule {
}
