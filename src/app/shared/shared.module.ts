import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomMaterialModule } from './custom-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    CustomMaterialModule.exportModules
  ]
})
export class SharedModule { }
