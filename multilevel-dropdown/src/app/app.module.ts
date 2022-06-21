import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Item1Component } from './Com/item1/item1.component';
import { Item2Component } from './Com/item2/item2.component';
import { Item3Component } from './Com/item3/item3.component';
import { Item21Component } from './Com/item2/item21/item21.component';
import { Item22Component } from './Com/item2/item22/item22.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    Item1Component,
    Item2Component,
    Item3Component,
    Item21Component,
    Item22Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
