import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./Com/dashboard/dashboard.component";
import {Dashboard2Component} from "./Com/dashboard2/dashboard2.component";
import {Dashboard3Component} from "./Com/dashboard3/dashboard3.component";
import {InboxComponent} from "./Com/inbox/inbox.component";
import {LoginComponent} from "./Com/login/login.component";
import {AuthGuard} from "../services/auth/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard1', pathMatch: 'full'},
  {path: 'dashboard1', component: DashboardComponent, data: {breadcrumb: 'Home / Dashboard1', animation: 'fader'}},
  {path: 'dashboard2', component: Dashboard2Component, data: {breadcrumb: 'Home / Dashboard2', animation: 'fader'}},
  {path: 'dashboard3', component: Dashboard3Component, data: {breadcrumb: 'Home / Dashboard3', animation: 'fader'}},
  {path: 'inbox', component: InboxComponent, data: {breadcrumb: 'Home / Inbox', animation: 'fader'},canActivate: [AuthGuard]},
  {path: 'login',component:LoginComponent, data: {breadcrumb: 'Login', animation: 'fader'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
