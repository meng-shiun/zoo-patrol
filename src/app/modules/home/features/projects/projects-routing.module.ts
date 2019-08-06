import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ArchivedComponent } from './archived/archived.component';
// TODO: shorten import path
import { RunningProjectsShellComponent } from './running/containers/running-projects-shell/running-projects-shell.component';
import { ProjectListComponent } from './running/components/project-list/project-list.component';
import { ProjectFilterBarComponent } from './running/components/project-filter-bar/project-filter-bar.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: 'running', pathMatch: 'full' },
      {
        path: 'running',
        component: RunningProjectsShellComponent,
        data: { routeId: 0 },
        children: []
      },
      { path: 'my_projects', component: MyProjectsComponent, data: { routeId: 1 } },
      { path: 'archived', component: ArchivedComponent, data: { routeId: 2 } },
      { path: '**', redirectTo: 'running'}
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
