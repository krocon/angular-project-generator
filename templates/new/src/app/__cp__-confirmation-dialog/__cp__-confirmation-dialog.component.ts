import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationData } from "./data/confirmation.data";
import { ButtonData } from "./data/button.data";


@Component({
  selector: 'app-__cp__-confirmation-dialog',
  templateUrl: './__cp__-confirmation-dialog.component.html',
  styleUrls: ['./__cp__-confirmation-dialog.component.scss'],
})
export class __capcp__ConfirmationDialogComponent {

  public vertical = false;

  constructor(
    public dialogRef: MatDialogRef<__capcp__ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationData,
  ) {
    this.vertical = data.vertical;
  }

  onButtonClicked(btn: ButtonData) {
    this.dialogRef.close(btn.key);
  }

  onCloseClicked() {
    this.dialogRef.close('CANCEL');
  }

}

