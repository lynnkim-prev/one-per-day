import {
  Component,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";


@Component({
  selector: 'app-modal-overlay',
  templateUrl: './modal-overlay.component.html',
  styleUrls: ['./modal-overlay.component.scss']
})
export class ModalOverlayComponent {
  constructor(
    public matDialog: MatDialog
  ) {
  }

  @ViewChild('offerTemplateRef') offerTemplateRef!: TemplateRef<any>
  public dialogRef: any;
  public isAccepted: boolean = false;

  public openDialog() {
    this.dialogRef = this.matDialog.open(this.offerTemplateRef, { data: "Click the button below to accept our amazing offer!" })
  }

  public onAcceptOfferClick() {
    this.isAccepted = true;
    this.dialogRef.close()
  }
}
