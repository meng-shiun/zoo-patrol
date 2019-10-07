import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';

import {
  RunningProjectsComponent,
  MyProjectsComponent,
  ProjectFilterBarComponent,
  ProjectArchivedComponent,
  ProjectListComponent,
  ProjectCreateComponent,
  ProjectAccumDetailsShellComponent,
  ProjectDetailsShellComponent,
  ProjectBudgetShellComponent,
  CanActivateProject
} from '.';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: 'running', pathMatch: 'full' },
      {
        path: 'running',
        component: RunningProjectsComponent,
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
        component: MyProjectsComponent,
        children: [
          {
            path: 'newProject',
            component: ProjectCreateComponent,
            outlet: 'popup'
          }
        ],
        data: { routeId: 1 }
      },
      {
        path: 'archived',
        component: ProjectArchivedComponent,
        children: [
          {
            path: 'newProject',
            component: ProjectCreateComponent,
            outlet: 'popup'
          }
        ],
        data: { routeId: 2 }
      },
      {
        path: ':id',
        component: ProjectAccumDetailsShellComponent,
        canActivate: [CanActivateProject],
        children: [
          { path: '', redirectTo: 'details', pathMatch: 'full' },
          {
            path: 'details',
            component: ProjectDetailsShellComponent,
            data: { routeId: 10 }
          },
          {
            path: 'planning',
            component: ProjectBudgetShellComponent,
            data: { routeId: 11 }
          }, // TODO: Replce with planning component
          {
            path: 'timesheets',
            component: ProjectBudgetShellComponent,
            data: { routeId: 12 }
          }, // TODO: Replce with timesheets component
          {
            path: 'budget',
            component: ProjectBudgetShellComponent,
            data: { routeId: 13 }
          },
          { path: '**', redirectTo: 'details' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateProject]
})
export class ProjectsRoutingModule {
  static components = [
    ProjectsComponent,
    RunningProjectsComponent,
    MyProjectsComponent,
    ProjectArchivedComponent,
    ProjectAccumDetailsShellComponent,
    ProjectDetailsShellComponent,
    ProjectBudgetShellComponent,
    ProjectFilterBarComponent,
    ProjectListComponent,
    ProjectCreateComponent
  ];
}
