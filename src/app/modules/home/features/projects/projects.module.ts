import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '@app/components/components.module';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectsRoutingModule.components
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
