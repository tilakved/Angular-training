import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Item1Component} from "./Com/item1/item1.component";
import {Item21Component} from "./Com/item2/item21/item21.component";
import {Item22Component} from "./Com/item2/item22/item22.component";
import {Item3Component} from "./Com/item3/item3.component";
import {Item2Component} from "./Com/item2/item2.component";


const routes: Routes = [
  {path: 'item-1', component: Item1Component},
  {
    path: 'item-2',component:Item2Component, children: [
      {path: 'item21', component: Item21Component},
      {path: 'item22', component: Item22Component}
    ]
  },
  {
    path: 'item-3', component: Item3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
