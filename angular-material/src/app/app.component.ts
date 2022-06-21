import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ExampleDialogComponent} from "./example-dialog/example-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  animal: string | undefined;
  name: string | undefined;
  title: any;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '350px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

}

