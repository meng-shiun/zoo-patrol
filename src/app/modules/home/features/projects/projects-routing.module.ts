import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

import { MyProjectsComponent, ArchivedComponent } from '.';

import {
  RunningProjectsShellComponent,
  ProjectFilterBarComponent,
  ProjectListComponent,
  ProjectDetailsShellComponent,
  ProjectDetailsComponent,
  ProjectBudgetShellComponent
} from './running';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: 'running', pathMatch: 'full' },
      {
        path: 'running',
        component: RunningProjectsShellComponent,
        data: { routeId: 0 }
      },
      {
        path: 'running/:id',
        component: ProjectDetailsShellComponent,
        children: [
          { path: '', redirectTo: 'details', pathMatch: 'full' },
          {
            path: 'details',
            component: ProjectDetailsComponent,
            data: { routeId: 0 }
          },
          {
            path: 'planning',
            component: ProjectBudgetShellComponent,
            data: { routeId: 1 }
          }, // TODO: Replce with planning component
          {
            path: 'timesheets',
            component: ProjectBudgetShellComponent,
            data: { routeId: 2 }
          }, // TODO: Replce with timesheets component
          {
            path: 'budget',
            component: ProjectBudgetShellComponent,
            data: { routeId: 3 }
          }
        ]
      },
      {
        path: 'my_projects',
        component: MyProjectsComponent,
        data: { routeId: 1 }
      },
      { path: 'archived', component: ArchivedComponent, data: { routeId: 2 } },
      { path: '**', redirectTo: 'running' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {
  static components = [
    ProjectsComponent,
    MyProjectsComponent,
    ArchivedComponent,
    RunningProjectsShellComponent,
    ProjectFilterBarComponent,
    ProjectListComponent
  ];
}
