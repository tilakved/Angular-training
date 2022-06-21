import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailComponent } from './Com/account-detail/account-detail.component';
import { PagenotfoundComponent } from './Com/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
