import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { ModuleBComponent } from './module-b.component';


@NgModule({
  declarations: [
    ModuleBComponent
  ],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule { }
