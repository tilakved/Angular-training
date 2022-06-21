import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ExampleDialogComponent} from './example-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCommonModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [ExampleDialogComponent],
  entryComponents: [ExampleDialogComponent],
  imports: [
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class ExampleDialogModule {
}
