import { NgModule } from "@angular/core";
import { CoffeeListPresComponent } from "./coffee-list-pres.component";
import { NgxPaginationModule } from "ngx-pagination";
import { NgForOf } from "@angular/common";

@NgModule({
  declarations: [CoffeeListPresComponent],
  imports: [
    NgxPaginationModule,
    NgForOf
  ],
  exports: [CoffeeListPresComponent]
})
export class CoffeeListPresComponentModule {
}
