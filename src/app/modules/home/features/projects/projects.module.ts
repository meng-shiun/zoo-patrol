import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [
    ProjectsRoutingModule.components
  ],
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
