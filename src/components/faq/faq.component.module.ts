import { NgModule } from "@angular/core";
import { faqComponent } from "./faq.component";
import { MatIconModule } from "@angular/material/icon";
import {
  NgClass,
  NgForOf
} from "@angular/common";

@NgModule({
  declarations: [faqComponent],
  imports: [
    MatIconModule,
    NgForOf,
    NgClass
  ],
  exports: [faqComponent]
})
export class FaqComponentModule {
}
