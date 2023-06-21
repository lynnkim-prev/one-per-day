import { NgModule } from "@angular/core";
import { ModalOverlayComponent } from "./modal-overlay.component";
import {
  NgIf,
  NgTemplateOutlet
} from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  declarations: [ModalOverlayComponent],
  imports: [
    NgIf,
    NgTemplateOutlet,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [ModalOverlayComponent]
})
export class ModalOverlayComponentModule {
}
