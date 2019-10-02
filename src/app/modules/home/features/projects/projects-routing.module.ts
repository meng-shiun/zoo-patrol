import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ArchivedComponent } from './archived.component';

import {
  RunningProjectsShellComponent,
  MyProjectsShellComponent,
  ProjectFilterBarComponent,
  ProjectListComponent,
  ProjectCreateComponent,
  ProjectAccumDetailsShellComponent,
  ProjectDetailsShellComponent,
  ProjectBudgetShellComponent
} from '.';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: 'running', pathMatch: 'full' },
      {
        path: 'running',
        component: RunningProjectsShellComponent,
        children: [
          {
            path: 'newProject',
            component: ProjectCreateComponent,
            outlet: 'popup'
          },
        ],
        data: { routeId: 0 }
      },
      {
        path: 'my_projects',
        component: MyProjectsShellComponent,
        data: { routeId: 1 }
      },
      { path: 'archived', component: ArchivedComponent, data: { routeId: 2 } },
      {
        path: ':id',
        component: ProjectAccumDetailsShellComponent,
        children: [
          { path: '', redirectTo: 'details', pathMatch: 'full' },
          {
            path: 'details',
            component: ProjectDetailsShellComponent,
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
    ArchivedComponent,
    RunningProjectsShellComponent,
    ProjectAccumDetailsShellComponent,
    ProjectDetailsShellComponent,
    ProjectBudgetShellComponent,
    ProjectFilterBarComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    MyProjectsShellComponent
  ];
}
