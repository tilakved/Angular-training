import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Com/test/test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './Com/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
