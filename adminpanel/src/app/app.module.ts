import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './Com/dashboard/dashboard.component';
import {Dashboard2Component} from './Com/dashboard2/dashboard2.component';
import {Dashboard3Component} from './Com/dashboard3/dashboard3.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import {InboxComponent} from './Com/inbox/inbox.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './Com/login/login.component'
import {ReactiveFormsModule} from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Dashboard2Component,
    Dashboard3Component,
    InboxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
