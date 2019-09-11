import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from './custom-material.module';
import { ProjectStatusPipe } from './project-status.pipe';


@NgModule({
  declarations: [
    ProjectStatusPipe
  ],
  imports: [
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectStatusPipe,
    CustomMaterialModule.exportModules
  ]
})
export class SharedModule { }
