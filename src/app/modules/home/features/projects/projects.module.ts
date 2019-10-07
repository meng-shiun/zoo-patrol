import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ComponentsModule } from '@app/components/components.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import {
  DetailsEditComponent,
  BudgetListComponent,
  BudgetListItemComponent,
  BudgetTotalComponent,
  MainShellTemplateComponent,
  ProjectFilterPipe,
} from '.';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from './store/project.effects';
import { ProjectArchivedShellComponent } from './containers/project-archived-shell/project-archived-shell.component';

@NgModule({
  declarations: [
    ProjectsRoutingModule.components,
    DetailsEditComponent,
    BudgetListComponent,
    BudgetListItemComponent,
    BudgetTotalComponent,
    MainShellTemplateComponent,
    ProjectFilterPipe,
    ProjectArchivedShellComponent,
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
