import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { RunningComponent } from './running/running.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ArchivedComponent } from './archived/archived.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: 'running', pathMatch: 'full' },
      { path: 'running', component: RunningComponent },
      { path: 'my_projects', component: MyProjectsComponent },
      { path: 'archived', component: ArchivedComponent },
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
    RunningComponent,
    MyProjectsComponent,
    ArchivedComponent
  ];
}
