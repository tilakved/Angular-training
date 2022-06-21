import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import {DesignutilitiesService} from "./appServices/designutilities.service";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DesignutilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
