import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { ModuleAComponent } from './module-a.component';


@NgModule({
  declarations: [
    ModuleAComponent
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule { }
