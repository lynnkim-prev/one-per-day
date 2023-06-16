import { NgModule } from "@angular/core";
import { MortgageCalculatorComponent } from "./mortgage-calculator.component";
import { ReactiveFormsModule } from "@angular/forms";
import {
  DecimalPipe,
  NgForOf,
  NgIf
} from "@angular/common";

@NgModule({
  declarations: [MortgageCalculatorComponent],
  imports: [
    ReactiveFormsModule,
    NgForOf,
    DecimalPipe,
    NgIf
  ],
  exports: [MortgageCalculatorComponent]
})
export class MortgageCalculatorComponentModule {
}
