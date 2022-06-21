import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from "./Com/first/first.component";
import {ModuleAComponent} from "./Com/first/module-a/module-a.component";
import {ModuleBComponent} from "./Com/first/module-b/module-b.component";

const routes: Routes = [
  {path: '', component: FirstComponent},
  {
    path: 'first', children: [
      {path: 'module-a', component: ModuleAComponent},
      {path: 'module-b', component: ModuleBComponent},
      {path: '', component: FirstComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
