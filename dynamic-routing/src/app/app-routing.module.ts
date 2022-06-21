import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AccountDetailComponent} from "./Com/account-detail/account-detail.component";
import {PagenotfoundComponent} from "./Com/pagenotfound/pagenotfound.component";

const routes: Routes = [
  { path: '',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
  {path:'account/:id', component: AccountDetailComponent},
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
