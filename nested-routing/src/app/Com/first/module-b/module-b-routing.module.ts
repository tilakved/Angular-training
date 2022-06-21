import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleBComponent } from './module-b.component';

const routes: Routes = [{ path: '', component: ModuleBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
