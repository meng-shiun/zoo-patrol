import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from './custom-material.module';


@NgModule({
  declarations: [],
  imports: [
    CustomMaterialModule
  ],
  exports: [
    CommonModule,
    CustomMaterialModule.exportModules
  ]
})
export class SharedModule { }
