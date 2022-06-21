import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-list-dialog',
  templateUrl: './add-list-dialog.component.html',
  styleUrls: ['./add-list-dialog.component.scss']
})
export class AddListDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public name: any) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
