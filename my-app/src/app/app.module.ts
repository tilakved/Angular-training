import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './Com/first/first.component';
import { SecondComponent } from './Com/second/second.component';
import { ChildComponent } from './Com/child/child.component';
import { ChildinchildComponent } from './Com/child/childinchild/childinchild.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ChildComponent,
    ChildinchildComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
