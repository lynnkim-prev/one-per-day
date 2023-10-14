import { NgModule } from "@angular/core";
import { AlgorithmComponent } from "./algorithm.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [AlgorithmComponent],
  imports: [
    MatIconModule
  ],
  exports: [AlgorithmComponent]
})
export class AlgorithmComponentModule {
}
