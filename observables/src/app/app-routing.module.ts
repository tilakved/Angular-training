import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./Com/first/first.component";
import {SecondComponent} from "./Com/second/second.component";

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"first"},
  {path:"first",component:FirstComponent},
  {path:"second",component:SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
