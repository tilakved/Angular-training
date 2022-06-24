import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormComponent} from './Com/form/form.component';
import {DetailsComponent} from './Com/details/details.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from './Com/login/login.component';
import {MatDividerModule} from "@angular/material/divider";
import {MessageComponent} from './Com/message/message.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'form'},
  {path: 'form', component: FormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'details', component: DetailsComponent, canActivate: [AuthGuard]},
  {path: 'message', component: MessageComponent}
  // {path: '**', component: PageNotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
    LoginComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
