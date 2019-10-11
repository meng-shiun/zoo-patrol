import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomMaterialModule } from './custom-material.module';
import { ProjectStatusPipe } from './project-status.pipe';
import { TableDesPipe } from './table-des.pipe';
import { ClickOutsideDirective } from './click-outside.directive';
import { DraggableDirective } from './draggable.directive';


@NgModule({
  declarations: [
    ProjectStatusPipe,
    TableDesPipe,
    ClickOutsideDirective,
    DraggableDirective
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
    TableDesPipe,
    ClickOutsideDirective,
    DraggableDirective,
    CustomMaterialModule.exportModules
  ]
})
export class SharedModule { }
