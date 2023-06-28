import { NgModule } from "@angular/core";
import { CountdownTimerComponent } from "./countdown-timer.component";
import { ReactiveFormsModule } from "@angular/forms";
import {
  NgForOf
} from "@angular/common";

@NgModule({
  declarations: [CountdownTimerComponent],
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  exports: [CountdownTimerComponent]
})
export class CountdownTimerComponentModule {
}
