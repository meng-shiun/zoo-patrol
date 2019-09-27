import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from './custom-material.module';
import { ProjectStatusPipe } from './project-status.pipe';
import { ProjectFilterPipe } from './filter.pipe';
import { ClickOutsideDirective } from './click-outside.directive';


@NgModule({
  declarations: [
    ProjectStatusPipe,
    ProjectFilterPipe,
    ClickOutsideDirective
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
    ProjectFilterPipe,
    ClickOutsideDirective,
    CustomMaterialModule.exportModules
  ]
})
export class SharedModule { }
