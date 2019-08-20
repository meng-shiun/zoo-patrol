import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '@app/components/components.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectDetailsShellComponent } from './running/containers/project-details-shell/project-details-shell.component';
import { ProjectDetailsComponent } from './running/components/project-details/project-details.component';
import { ProjectBudgetComponent } from './running/components/project-budget/project-budget.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './store/project.effects';

@NgModule({
  declarations: [
    ProjectsRoutingModule.components,
    ProjectDetailsShellComponent,
    ProjectDetailsComponent,
    ProjectBudgetComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    ProjectsRoutingModule,
    StoreModule.forFeature('projectModule', reducers),
    EffectsModule.forFeature([ProjectEffects])
  ]
})
export class ProjectsModule { }
